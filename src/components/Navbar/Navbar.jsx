import React from "react";
import "./navbar.css";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import logo from "../../assets/logo.png"; // adjust path if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Infycode Logo" className="logo-img" />
          <span className="logo-text">InfyCode</span>
        </div>

        {/* <div className="divider"></div>

        <div className="category">
          <IoGridOutline size={20} />
          <span>Category</span>
        </div> */}
      </div>

      <ul className="nav-menu">
        <li>Home</li>
        <li>Courses</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="navbar-right">
        <FiSearch className="icon" />

        <div className="cart">
          <FiShoppingBag className="icon" />
          <span className="cart-count">3</span>
        </div>

        <button className="login-btn">Login / Register</button>
      </div>
    </nav>
  );
}

export default Navbar;