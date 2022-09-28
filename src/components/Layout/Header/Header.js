import React, { Fragment } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";

const Header = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    navigate("/admin/login");
    //console.log("jaiho");
  };

  return (
    <Fragment>
      <div className="header-wrapper">
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/"></Link>
            </div>
            <div className="navigationbar">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="rigthsection">
              {!isAuthenticated ? (
                <Link to="/admin/login">Login/Register</Link>
              ) : (
                <Fragment>
                  <a href="javascript:void" onClick={logoutUser}>
                    Logout
                  </a>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
