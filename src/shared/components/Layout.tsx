import { createContext, FormEvent, ReactNode, RefObject, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import algoliasearch from 'algoliasearch';
import { Footer, SkipLink } from '@boston-scientific/anatomy-react';
import logoADS from 'assets/images/logo-anatomy.svg';
import { NavPrimary, NavItemPrimary, NavNodePrimary } from '@boston-scientific/anatomy-react';
import { SearchResult } from '@boston-scientific/anatomy-react';
import { useNavigate } from 'react-router-dom';
import { indexSearch, isActiveNode, ROOT_URL } from 'shared/helpers';
import useHeadingIds from 'shared/hooks/useHeadingIds';
import logoTagline from 'assets/images/logo-bsc-tagline.svg';
import CarbonRibbon from 'shared/components/CarbonRibbon';

interface Props {
  children: ReactNode;
}

const navItems: NavItemPrimary[] = [
  {
    text: 'Home',
    to: '/',
    isExactMatch: true
  },
  {
    text: 'Content',
    to: '/content',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'content';
    }
  },
  {
    text: 'Foundations',
    to: '/foundations',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'foundations';
    }
  },
  {
    text: 'Components',
    to: '/components',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'components';
    }
  },
  {
    text: 'Code standards',
    to: '/code-standards',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'code-standards';
    }
  },
  {
    text: 'Resources',
    to: '/resources',
    isActive: (location) => {
      return location.pathname.split('/')[1] === 'resources';
    }
  }
];

const logo = {
  src: logoADS,
  alt: 'Anatomy design system logo',
  to: '',
  ariaLabel: 'Anatomy design system home'
};

const primaryNavTexts = {
  searchAriaLabel: 'Search Anatomy site'
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_ID!, process.env.REACT_APP_ALGOLIA_KEY!);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const index = searchClient.initIndex(process.env.REACT_APP_ALGOLIA_INDEX!);

export const SearchIndexContext = createContext(index);

const Layout = (props: Props): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [pathname, setPathname] = useState('');

  const onSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const onSearch = (query: string, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  useEffect(() => {
    indexSearch(searchQuery).then((results) => {
      setSearchResults(results);
    });
  }, [searchQuery]);

  useEffect(() => {
    setPathname(ROOT_URL + (location.pathname === '/' ? '' : location.pathname));
  }, [location]);

  useHeadingIds();

  return (
    <>
      <SkipLink destinationId="mainContent" destination="main content" />
      <NavPrimary
        texts={primaryNavTexts}
        logo={logo}
        navItems={navItems}
        searchResults={searchResults}
        location={location}
        isActiveNode={(node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => isActiveNode(node, ref, location)}
        navigateToSearchResult={(result) => navigate(result.to as string)}
        isConstrained
        onSearch={onSearch}
        onSearchChange={onSearchChange}
      />
      <SearchIndexContext.Provider value={index}>{props.children}</SearchIndexContext.Provider>
      {pathname ? (
        <Footer logo={{ src: logoTagline, alt: 'Boston Scientific' }} className="docs-footer">
          {<CarbonRibbon url={pathname} />}
        </Footer>
      ) : (
        <Footer logo={{ src: logoTagline, alt: 'Boston Scientific' }} className="docs-footer" />
      )}
    </>
  );
};

export default Layout;
