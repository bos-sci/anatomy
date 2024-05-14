import { useEffect, useState } from 'react';
import { Search, SearchResult } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import { useNavigate } from 'react-router-dom';

const data: SearchResult[] = [
  {
    text: 'Search result 1',
    to: 'docs-demo-link'
  },
  {
    text: 'Search result 2',
    to: 'docs-demo-link'
  },
  {
    text: 'Search result 3',
    to: 'docs-demo-link'
  }
];

const DefaultSearch = (): JSX.Element => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setSearchResults(data.filter((d) => d.text.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  return (
    <>
      <Example>
        <Search
          label="Search"
          searchResults={searchResults}
          navigateToResult={(result) => navigate(result.to as string)}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Example>
      <iframe
        title="Search Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-search--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultSearch;
