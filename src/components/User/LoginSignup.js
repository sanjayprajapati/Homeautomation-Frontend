import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignup.css";
import Loader from "../Layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FaceIcon from "@mui/icons-material/Face";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, login, register } from "../../actions/userAction";
import MetaData from "../Layout/Header/MetaDeta";
import FlashMessage from "react-flash-message";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  //console.log(error);

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const { username, email, password, mobile } = user;

  const loginSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  const registerSubmit = () => {
    console.log("Registration completed");
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [dispatch, error, isAuthenticated]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <MetaData title={`SignUp & Login`} />
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          {/*error && <span className="errormsg">{error}</span>*/}
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="text"
                value={loginEmail}
                placeholder="Email"
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            encType="multipart/form-data"
            ref={registerTab}
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />
              <input type="text" placeholder="Name" required name="name" />
            </div>
            <div className="signUpEmail">
              <MailOutlineIcon />
              <input type="email" placeholder="Email" required name="email" />
            </div>
            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="text"
                placeholder="Mobile No."
                required
                name="mobile"
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="cpassword"
              />
            </div>

            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignup;
