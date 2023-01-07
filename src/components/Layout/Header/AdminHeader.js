import React, { Fragment, useRef, useState } from "react";
import { Link, Navigate, useNavigate, NavLink } from "react-router-dom";
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
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">
                <img src={logo} />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <NavLink class="nav-link active" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link" to="about">
                      About
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink class="nav-link" to="contact">
                      Contact
                    </NavLink>
                  </li>
                  {!isAuthenticated ? (
                    <li class="nav-item">
                      <NavLink class="nav-link" to="admin/login">
                        Sign In
                      </NavLink>
                    </li>
                  ) : (
                    <Fragment>
                      <li class="nav-item">
                        <NavLink class="nav-link" to="admin/dashboard">
                          Dashboard
                        </NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="nav-link" to="admin/dashboard">
                          {user.name}
                        </NavLink>
                      </li>
                    </Fragment>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminHeader;
