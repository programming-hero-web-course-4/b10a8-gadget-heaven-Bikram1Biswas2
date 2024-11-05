import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./Navbar.css"
import { useContext } from "react";
import { CartContext } from "../../main";


const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  const location = useLocation()
  const isHomePage = location.pathname === "/"

    const Items = (
        <div className="flex" id="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </div>
    )
    
    return (
        <div className={`navbar  rounded-t-xl mt-4 ${ isHomePage ? "bg-[#9538E2] text-white" : "bg-white text-black"}`}>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {Items}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl ">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 ">
          {Items}
          </ul>
        </div>
        <div className="navbar-end mr-4 gap-2 text-xl ">
       <span className="border bg-white rounded-full text-[black] p-2 "> <FaShoppingCart/></span>
       <span className="badge badge-sm indicator-item -mt-7 -ml-5">{cartCount}</span>
           <span className="border bg-white rounded-full text-[black] p-2"> <CiHeart/></span>
           <span className="badge badge-sm indicator-item -mt-7 -ml-5">0</span>
        </div>
      </div>
    );
};

export default Navbar;