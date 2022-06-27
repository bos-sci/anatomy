import { useState, useEffect, useRef } from 'react';
import Button from '../../Button';
import NavSecondaryList from './NavSecondaryList';
import { NavNode } from './NavSecondary';

interface NavParentProps {
  navItem: NavNode;
  activeParent: NavNode | null;
  openChild: (node: NavNode | null) => any;
}

let navParentId = 0;

const NavSecondaryListParent = ({ navItem, activeParent, openChild }: NavParentProps) => {

  const [navListId, setNavListId] = useState('');
  const parentBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const idNum = ++navParentId;
    setNavListId('navItemList' + idNum);
  }, []);

  return (
    <li className="ads-nav-item-parent">
      <Button
        ref={parentBtnRef}
        variant="subtle"
        className="ads-nav-link"
        aria-expanded={navItem === activeParent}
        aria-controls={navListId}
        onClick={() => openChild(navItem)}
      >
        {navItem.text}
      </Button>
      <NavSecondaryList navListId={navListId} navItems={navItem.children!} parent={navItem} activeParent={activeParent} openChild={openChild} />
    </li>
  );
}

export default NavSecondaryListParent;