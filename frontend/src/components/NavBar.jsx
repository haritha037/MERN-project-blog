import { Link } from "react-router-dom";
import { pageData } from "./pageData";

function NavBar() {
  return (
    <nav className="navbar">
      {pageData.map((page) => (
        <Link className="navItem" to={page.path} key={page.name}>
          {page.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
