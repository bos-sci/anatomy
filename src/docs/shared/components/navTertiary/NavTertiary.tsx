import { Link } from "react-router-dom";
import "./NavTertiary.scss"

export interface NavItem {
  id: string;
  text: string;
}

interface Props {
  navTertiaryItems: NavItem[];
}

const NavTertiary = ({ navTertiaryItems }: Props): JSX.Element => {
  return (
    <nav className="nav-tertiary" aria-label="Table of contents">
      <h2 id="navTertiaryTitle" className="nav-tertiary-title" aria-hidden="true">
        On this page
      </h2>
      <ul className="nav">
        {navTertiaryItems.map((navItem, i) => {
          return (
            <li key={`tertiaryNavItem${i}`} className="nav-item">
              <Link to={navItem.id} className="nav-link">
                {navItem.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default NavTertiary;