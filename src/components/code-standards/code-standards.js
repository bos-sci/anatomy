import { useState, useEffect, useContext } from 'react';
import NavSecondary from '../shared/nav-secondary/nav-secondary';
import useContentful from '../../hooks/useContentful';
import { slugify } from '../helpers';
import { IdLookupContext } from '../App';
import marked from 'marked';
import DOMPurify from 'dompurify';

const CodeStandards = (props) => {
  const codeStandard = props.match.params.codeStandard;
  let [navItems, setNavItems] = useState(null);
  let [codeStandardData, setCodeStandardData] = useState(null);

  const idLookup = useContext(IdLookupContext);

  const query = `
    query CodeStandardData($id: String!) {
      codeStandard(id: $id) {
        name
        content
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.codeStandards[codeStandard]
  };

  const data = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if (data.response && data.response.data) {
      setCodeStandardData(data.response.data.codeStandard);
    }
    const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
    const navItems = Object.keys(idLookup.codeStandards).map(name => ({
      text: name,
      slug: basePath + '/' + slugify(name)
    }));
    setNavItems(navItems);
  }, [data.response, idLookup, props.match.path]);

  return (
    <div className="app-body">
      { navItems && <NavSecondary navItems={navItems} /> }
        <main>
          {codeStandardData && <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(marked(codeStandardData.content))}} /> }
        </main>
    </div>
  );
}

export default CodeStandards;