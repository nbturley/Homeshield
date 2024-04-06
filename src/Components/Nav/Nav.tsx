import { Link, NavLink } from "react-router-dom";
import  "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
       
        <ul>
          <li> <Link to={"/"} className="title">
          Homeshield
        </Link></li>
          <li>
            <NavLink to={""}>Services</NavLink>
          </li>

          <li>
            <NavLink to={""}>Task</NavLink>
          </li>

          <li>
            <NavLink to={""}>About</NavLink>
          </li>

          <li>
            <NavLink to={"/TaskPage"}>TaskPage</NavLink>
          </li>
        </ul>
        
      </nav>
  </>
  );
};
export default Nav;
