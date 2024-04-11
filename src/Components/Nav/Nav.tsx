import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to={"/"} className="title">
              HomeShield
            </Link>
          </li>
          <li>
            <a href="#services" className="NavLink">
              Services
            </a>
          </li>

          <li>
            <a href="#task" className="NavLink">
              Task
            </a>
          </li>

          <li>
            <a href="#about" className="NavLink">
              About
            </a>
          </li>

        </ul>
      </nav>
    </>
  );
};
export default Nav;
