import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBed, FaPlane, FaCarAlt, FaFreeCodeCamp, FaTaxi, FaUserPlus, FaUserTie } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";

const Navbar = () => {

  return (
    <>
      <div className="Header py-1">
        {/* top navbar  */}
        <div className="topHeader d-flex">

          <NavLink className="navbar-brand mx-2 text-white" to='/'>BOO&#10094;ING.ME</NavLink>

          <div className="userBar">

            <NavLink className="btn btn-outline-info  mx-2 text-uppercase" to='/register'><FaUserPlus /> Register</NavLink>

            <NavLink className="btn btn-outline-info mx-2 text-uppercase" to='/Login'><FaUserTie /> Login</NavLink>

          </div>



        </div>

        {/* main Navbar here */}

        <div className="mainNavbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FcMenu />
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2 my-1" to="/"><FaBed /> Stays</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2 my-1" to="/"><FaPlane /> Flights</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2 my-1" to="/"><FaCarAlt /> Car Rental</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2 my-1" to="/"><FaFreeCodeCamp /> Attractions</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2 my-1" to="/"><FaTaxi /> Airport Taxi </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
