import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="link" to="./RandomTextList">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className="link" to="./RandomUserList">
              People
            </Link>
          </li>
          <li>
            <Link className="link" to="./Form">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
