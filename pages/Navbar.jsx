import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Nav() {
  return (
    <>
      <div className="navbar_only">
        <ul>
          <li id="three">
            <Link to="/About">About</Link>
          </li>
          <li id="three">
            <Link to="/Contact">Contact</Link>
          </li>
          <li id="three">
            <Link to="/Pricing">Booknow</Link>
          </li>
          <li id="btn" className="loginnav">
            <Link to="/loginpage">
              <button>Login</button>
            </Link>
          </li>
          <li>
            <button id="btn">Search</button>
          </li>
          <li>
            <input id="newin" type="text" placeholder="Search Hotel" />
          </li>
        </ul>
      </div>
    </>
  );
}
