import "./App.css";
import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WebFont from "webfontloader";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Loader from "./components/Layout/Loader/Loader";
import Home from "./components/Home/Home";
import LoginSignup from "./components/User/LoginSignup";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import Profile from "./components/User/Profile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Index from "./components/Dashboard/Index";
import { useCookies } from "react-cookie";
import Controllers from "./components/Dashboard/Controllers";
import ControllerType from "./components/Dashboard/ControllerType";
import ControllerDetail from "./components/Dashboard/ControllerDetail";
import UserDetail from "./components/Dashboard/UserDetail";
import ControllerTypeDetail from "./components/Dashboard/ControllerTypeDetail";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, error, token } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router basename="/">
      {/*<Loader />*/}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/admin/dashboard" element={<Index />} />
          <Route
            exact
            path="/admin/dashboard/users/:id"
            element={<UserDetail />}
          />
          <Route
            exact
            path="/admin/dashboard/controllers"
            element={<Controllers />}
          />
          <Route
            exact
            path="/admin/dashboard/controllers/:id"
            element={<ControllerDetail />}
          />
          <Route
            exact
            path="/admin/dashboard/controllerstype/:id"
            element={<ControllerTypeDetail />}
          />
          <Route
            exact
            path="/admin/dashboard/controllerstype"
            element={<ControllerType />}
          />
        </Route>
        <Route exact path="/admin/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
