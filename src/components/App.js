import { useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { slugify } from './helpers';
import useContentful from '../hooks/useContentful';
import CodeStandardsRouter from './codeStandards/CodeStandardsRouter';
import ComponentsRouter from './components/ComponentsRouter';
import NavPrimary from './shared/NavPrimary';

export const IdLookupContext = createContext({
  components: {},
  codeStandards: {}
});

function App() {
  const [idLookup, setIdLookup] = useState(null);

  const query = `
    {
      codeStandardCollection {
        items {
          name
          sys {
            id
          }
        }
      }
      componentCollection(order: name_ASC) {
        items {
          name
          sys {
            id
          }
        }
      }
    }
  `;

  const data = useContentful(query);

  useEffect(() => {
    if (data.response) {
      const idMap = {
        codeStandards: {},
        components: {}
      };
      data.response.codeStandardCollection.items.forEach(item => (
        idMap.codeStandards[slugify(item.name)] = {
          id: item.sys.id,
          name: item.name
        })
      );
      data.response.componentCollection.items.forEach(item => (
        idMap.components[slugify(item.name)] = {
          id: item.sys.id,
          name: item.name
        })
      );
      setIdLookup(idMap);
      console.log('setting idLookup');
    }
  }, [data.response]);

  return (
    <Router>
      <div className="grid-container">
        <IdLookupContext.Provider value={idLookup}>
          <NavPrimary />
          {idLookup &&
            <div className="container-fluid container-lg app-body">
              <div className="row">
                <div className="col-12 col-lg-9 col-xl-10">
                    <Switch>
                      <Route exact path="/">
                        <Redirect to="/components" />
                      </Route>
                      <Route path="/components" component={ComponentsRouter} />
                      <Route path="/code-standards" component={CodeStandardsRouter} />
                    </Switch>
                </div>
              </div>
            </div>
          }
          {!idLookup && <p>Loading...</p>}
        </IdLookupContext.Provider>
      </div>
    </Router>
  );
}

export default App;
