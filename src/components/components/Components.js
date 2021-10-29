import { useState, useEffect, useContext } from 'react';
import DOMPurify from 'dompurify';
import marked from 'marked';
import Preview from './Preview';
import NavSecondary from '../shared/navSecondary/NavSecondary';
import useContentful from '../../hooks/useContentful';
import { IdLookupContext } from '../App';

const Components = (props) => {
  const component = props.match.params.component;
  const idLookup = useContext(IdLookupContext);
  let [navItems, setNavItems] = useState(null);
  let [componentData, setComponentData] = useState(null);

  const query = `
    query ComponentData($id: String!) {
      component(id: $id) {
        name
        description
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.components[component].id
  };

  const data = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if(data.response) {
      setComponentData(data.response.component);
      const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
      const navItems = Object.keys(idLookup.components).map(entry => ({
        text: idLookup.components[entry].name,
        slug: basePath + '/' + entry
      }));
      setNavItems(navItems);
    }
  }, [data.response, idLookup, props.match.path]);

  return (
    <div className="app-content">
      { navItems && <NavSecondary navItems={navItems} /> }
      <main>
        { componentData &&
          <>
            <h1>{componentData.name}</h1>
            <dl>
              <dt>Last Updated</dt>
              <dd>{new Date(componentData.sys.publishedAt).toLocaleDateString()}</dd>
            </dl>
            <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(marked(componentData.description))}} />
          </>
        }
        <div className="demo-example">
          <Preview component={component} />
        </div>
      </main>
  </div>);
}

export default Components;