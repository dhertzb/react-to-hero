import React from "react";
import "../../styles/navbar.css";
import Logo from "../core/Logo";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar--horizontal">
        <Link to="/">
          <Logo />
        </Link>

        <ul>
          <li>
            <Link to="/passengers">Passengers</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
