import { useState, useEffect, createContext, Suspense, useCallback, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { slugify } from './helpers';
import { useGetCollectionsQuery } from './shared/types/contentful';
import { IdLookup, IdLookupEntry } from './shared/types/docs';
import Home from './home/Home';
import NotFound from './shared/components/notFound/NotFound';

const CodeStandardsRouter = lazy(() => import('./codeStandards/CodeStandardsRouter'));
const ComponentsRouter = lazy(() => import('./components/ComponentsRouter'));
const ContentGuidelinesRouter = lazy(() => import('./contentGuidelines/ContentGuidelinesRouter'));
const FoundationsRouter = lazy(() => import('./foundations/FoundationsRouter'));
const ResourcesRouter = lazy(() => import('./resources/ResourcesRouter'));

interface Collection {
  items: {
    sys: {
      id: string;
    }
    name: string;
    group?: string;
  }[];
}

const initialIdLookup: IdLookup = {
  contentGuidelines: {},
  components: {},
  codeStandards: {},
  foundations: {},
  resources: {}
};

export const IdLookupContext = createContext<IdLookup>(initialIdLookup);

const App = (): JSX.Element => {
  const [idLookup, setIdLookup] = useState<IdLookup>({} as IdLookup);
  const [isLookupReady, setIsLookupReady] = useState(false);
  const {data, error} = useGetCollectionsQuery({
    variables: {
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  const createLookup = useCallback((collection: Collection, destination: IdLookupEntry) => {
    collection.items.forEach((item) => (
      destination[slugify(item?.name as string)] = {
        id: item?.sys.id,
        name: item?.name,
        group: item?.group ? slugify(item.group) : null
      })
    );
  }, []);

  useEffect(() => {
    if (data) {
      const idMap: IdLookup = initialIdLookup;
      createLookup(data.foundationCollection as Collection, idMap.foundations);
      createLookup(data.contentGuidelineCollection as Collection, idMap.contentGuidelines);
      createLookup(data.codeStandardCollection as Collection, idMap.codeStandards);
      createLookup(data.componentCollection as Collection, idMap.components);
      createLookup(data.resourceCollection as Collection, idMap.resources);

      setIdLookup(idMap);
      setIsLookupReady(true);
    }
  }, [data, createLookup]);

  return (
    <Router>
      <IdLookupContext.Provider value={idLookup}>
        {isLookupReady &&
          <Suspense fallback={<main id="mainContent"><p>Loading...</p></main>}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="components">
                <Route path='' element={<Navigate to="button" />} />
                <Route path=':componentName'>
                  <Route path='' element={<ComponentsRouter />} />
                  <Route path='example/:example' element={<ComponentsRouter isExternal />} />
                </Route>

                <Route path=':group'>
                  <Route path=':componentName'>
                    <Route path='' element={<ComponentsRouter />} />
                    <Route path='example/:example' element={ <ComponentsRouter isExternal />} />
                  </Route>
                </Route>
              </Route>

              <Route path="code-standards">
                <Route path='' element={<Navigate to='general' />} />
                <Route path=':standardName' element={<CodeStandardsRouter />} />
              </Route>

              <Route path="content">
                <Route path='' element={<Navigate to='audiences' />} />
                <Route path=':contentName' element={<ContentGuidelinesRouter />} />
              </Route>

              <Route path="foundations">
                <Route path='' element={<Navigate to='accessibility' />} />
                <Route path=':foundationName' element={<FoundationsRouter />} />
                <Route path=':group/:foundationName' element={<FoundationsRouter />} />
              </Route>

              <Route path="resources">
                <Route path='' element={<Navigate to='community' />} />
                <Route path=':resourceName' element={<ResourcesRouter />} />
                <Route path=':group/:resourceName' element={<ResourcesRouter />} />
                <Route path="developers/code-standards/general" element={<Navigate to="../../code-standards" />} />
              </Route>

              <Route path="*" element={<NotFound />}/>
            </Routes>
          </Suspense>
        }
      </IdLookupContext.Provider>
    </Router>
  );
}

export default App;
