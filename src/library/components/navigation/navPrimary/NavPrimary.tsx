/* TODO
  - Figure out what needs to be a prop
  - Fix borders
  - Keyboard nav for tabbing backwards from menu to nav bar
*/

import { FocusEvent as ReactFocusEvent, useEffect, useRef, useState } from 'react';
import { RequireOnlyOne } from '../../../types';
import Button from '../../Button';
import './NavPrimary.scss';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavUtility from './NavUtility';
import { NavLink, NavLinkProps } from 'react-router-dom';
import IconClose from '../../icon/icons/IconClose';
import Link from '../../Link';

interface NavItem {
  text: string;
  slug?: string;
  href?: string;
}

interface NavItemPrimaryBase extends NavItem {
  children?: NavItemPrimary[];
  description?: string;
  title?: string;
  altTo?: string;
  altHref?: string;
  altLinkText?: string;
  isExactMatch?: boolean;
  isActive?: NavLinkProps['isActive'];
}

interface NavItemUtilityBase extends NavItem {
  children?: NavItemUtility[];
}

export type NavItemPrimary = RequireOnlyOne<NavItemPrimaryBase, 'slug' | 'href' | 'children'>;

export type NavItemUtility = RequireOnlyOne<NavItemUtilityBase, 'slug' | 'href' | 'children'>;

interface NavTreeNode extends NavItemPrimaryBase {
  parent: NavNode | null;
  children?: NavNode[];
  id: string;
}

export type NavNode = RequireOnlyOne<NavTreeNode, 'slug' | 'href' | 'children'>;

export interface HistoryNode {
  node: NavNode;
  depth: number;
}

interface Props {
  logo: {
    src: string;
    alt: string;
    href?: string;
    to?: string;
    ariaLabel: string;
  };
  texts?: {
    menuToggleAriaLabel?: string;
    menuToggleText?: string;
    searchToggleAriaLabel?: string;
    searchToggleText?: string;
    searchButtonText?: string;
    searchButtonAriaLabel?: string;
    utilityNavAriaLabel?: string;
    primaryNavAriaLabel?: string;
  }
  navItems: NavItemPrimary[];
  activeSlug?: string;
  utilityItems?: NavItemUtility[];
  hasSearch?: boolean;
}

const NavPrimary = ({ logo, texts, utilityItems, navItems, hasSearch = true }: Props): JSX.Element => {

  const [navTree, setNavTree] = useState<NavNode[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [history, setHistory] = useState<HistoryNode[]>([]);
  const [activeNode, setActiveNode] = useState<NavNode | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const pushHistory = (navItem: NavNode, depth: number) => {
    const newHistory = [...history];
    if (newHistory.length > 0 && depth <= newHistory[newHistory.length - 1].depth) {
      newHistory.splice(depth);
    }
    newHistory.push({
      node: navItem,
      depth: depth
    });
    setHistory(newHistory);
  }

  const popHistory = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }

  const updateMenu = (navItem: NavNode): void => {

    if (history.length && history[0].node === navItem) {
      setHistory([]);
      setIsMenuOpen(false);
    } else {
      pushHistory(navItem, 0);
      setIsMenuOpen(true);
      setIsSearchOpen(false);
    }
  }

  const getActiveRoot = (): NavNode | null => {
    let node = activeNode;
    while (node?.parent) {
      node = node.parent;
    }
    return node;
  }

  useEffect(() => {
    const tree = [...navItems] as NavNode[];

    const populateParents = (nodes: NavNode[], parent: NavNode | null = null, index = 0) => {
      nodes.forEach((node, i) => {
        node.parent = parent;
        node.id = `navPrimaryNode${index}-${i}`;
        if (node.children) {
          populateParents(node.children as NavNode[], node, ++index);
        }
      });
    }
    populateParents(tree);
    setNavTree(tree);

  }, [navItems]);

  useEffect(() => {
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setHistory([]);
      }
    }
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    }
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen && isSearchOpen) {
      setIsSearchOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleSearch = () => {
    if (!isSearchOpen && isMenuOpen) {
      setIsMenuOpen(false);
      setHistory([]);
    }
    setIsSearchOpen(!isSearchOpen);
  }

  const manageFocus = (e: ReactFocusEvent) => {
    if (e.target.getAttribute('aria-expanded') === 'true') {
      menuRef.current?.focus();
    }
  }

  return (
    <header className="nav-header" ref={navRef}>
      {utilityItems && <NavUtility utilityItems={utilityItems} ariaLabel={texts?.utilityNavAriaLabel} />}
      <nav className="nav-primary" aria-label={texts?.primaryNavAriaLabel || 'primary'}>
        <div className="nav-bar">
          <ul className="nav">
            <li className="nav-item nav-item-logo">
              {(logo.to || logo.href) ?
                <Link to={logo.to} href={logo.href} className="nav-link-logo" aria-label={logo.ariaLabel}>
                  <img src={logo.src} alt={logo.alt} />
                </Link>
                :
                <img src={logo.src} alt={logo.alt} />
              }
            </li>
            {navTree.map((navItem, i) => (
              <li key={navItem.text + i} className="nav-item nav-item-root">
                {navItem.children &&
                  <Button
                    id={navItem.id}
                    type="button"
                    variant="subtle"
                    className={"nav-link" + (navItem === getActiveRoot() ? ' active' : '')}
                    aria-expanded={history[0] && navItem === history[0].node}
                    onClick={() => updateMenu(navItem)}
                    onBlur={manageFocus}>
                    {navItem.text}
                  </Button>
                }
                  {(navItem.slug || navItem.href) &&
                    <NavLink exact={!!navItem.isExactMatch} to={(navItem.slug ? navItem.slug : navItem.href) || ''} className="nav-link" isActive={navItem.isActive}>{navItem.text}</NavLink>
                  }
              </li>
            ))}
            {hasSearch &&
              <li className="nav-item nav-item-search">
                <Button
                  variant="subtle"
                  className="nav-link"
                  aria-label={texts?.searchToggleAriaLabel || 'Toggle search'}
                  aria-expanded={isSearchOpen}
                  onClick={toggleSearch}>
                  <span className="nav-link-search-text">
                    {texts?.searchToggleText || 'Search'}
                  </span>
                </Button>
              </li>
            }
            <li className="nav-item nav-item-toggle">
              <Button
                variant="subtle"
                className="nav-link"
                aria-label={texts?.menuToggleAriaLabel || 'Toggle menu'}
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}>
                {texts?.menuToggleText || 'Menu'}
              </Button>
            </li>
          </ul>
        </div>
        {isSearchOpen &&
          <div className="search-panel">
            <form className="search" role="search" aria-label="site search">
              <div className="search-control">
                <input
                  type="search"
                  className="ads-input-text-input search-input"
                  placeholder="Search"
                  aria-label="search"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)} />
                {searchValue &&
                  <button
                    className="search-clear"
                    aria-label="clear search text"
                    onClick={() => setSearchValue('')}>
                    <IconClose className="ads-icon-lg" />
                  </button>
                }
              </div>
              <Button variant="assertive" disabled={!searchValue} aria-label={texts?.searchButtonAriaLabel || 'Search'}>
                {texts?.searchButtonText || 'Search'}
              </Button>
            </form>
          </div>
        }
        {navTree.length > 0 &&
          <NavPrimaryMenu
            ref={menuRef}
            navItems={navTree}
            utilityItems={utilityItems}
            setActiveNode={setActiveNode}
            isMenuOpen={isMenuOpen}
            history={history}
            pushHistory={pushHistory}
            popHistory={popHistory} />
        }
      </nav>
    </header>
  );
}

export default NavPrimary;