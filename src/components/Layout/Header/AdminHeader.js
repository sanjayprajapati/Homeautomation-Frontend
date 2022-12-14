import React, { Fragment, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const dropmenu = useRef(null);
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    navigate("/admin/login");
    //console.log("jaiho");
  };
  const toggleDropdown = () => {
    const menu = dropmenu.current;
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  };

  return (
    <Fragment>
      <div className="header-wrapper">
        <div className="">
          <div className="header">
            <div className="logo">
              <Link to="/"></Link>
            </div>
            <nav className={isNavExpanded ? "menu" : "menu expanded"}>
              <div className="navigationbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                {!isAuthenticated ? (
                  <Link to="/admin/login">Sign In</Link>
                ) : (
                  <div className="dropdown">
                    <a href="javascript:void(0)" onClick={toggleDropdown}>
                      {user.name}
                    </a>
                    <ul className="dropdownmenu" ref={dropmenu}>
                      <li>
                        <Link to="/admin/dashboard">Dashboard </Link>
                      </li>
                      <li>
                        <a href="javascript:void(0)" onClick={logoutUser}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>
            <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminHeader;
