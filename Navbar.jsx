import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Nav() {
  return (
    <>
      <div className="navbar_only">
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li id="loginnav">
            <Link to="/LoginPage">
              <button>Login</button>
            </Link>
          </li>
          <li>
            <button id="btn">Search</button>
          </li>
          <li>
            <input id="newin" type="text" placeholder="Search.." />
          </li>
        </ul>
      </div>
    </>
  );
}
