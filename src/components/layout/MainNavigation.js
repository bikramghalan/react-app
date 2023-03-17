import { Link } from "react-router-dom";
import navCSS from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={navCSS.header}>
      <div className={navCSS.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
