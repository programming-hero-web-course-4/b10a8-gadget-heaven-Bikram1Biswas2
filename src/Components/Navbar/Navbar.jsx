import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./Navbar.css"


const Navbar = () => {

    const Items = (
        <div className="flex" id="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </div>
    )
    
    return (
        <div className="navbar bg-[#9538E2] rounded-t-xl mt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul id=""
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
              {Items}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-white">
          {Items}
          </ul>
        </div>
        <div className="navbar-end mr-4 gap-2 text-xl text-white">
       <span className="border bg-white rounded-full text-[black] p-2"> <FaShoppingCart/></span>

           <span className="border bg-white rounded-full text-[black] p-2"> <CiHeart/></span>
        </div>
      </div>
    );
};

export default Navbar;