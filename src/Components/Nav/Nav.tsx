import { Link, NavLink } from "react-router-dom";
import  "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to={"/"} className="title">
          Homeshield
        </Link>
        <ul>
          <li>
            <NavLink to={"/questions1"}>Questions 1</NavLink>
          </li>

          <li>
            <NavLink to={"/questions2"}>Questions 2</NavLink>
          </li>

          <li>
            <NavLink to={"/questions3"}>Questions 3 </NavLink>
          </li>

          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </ul>
      </nav>

      
  </>
  );
};
export default Nav;
