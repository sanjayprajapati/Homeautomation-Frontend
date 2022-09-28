import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";

const ProtectedRoute = () => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  if (loading) {
    return <Loader />;
  } else if (isAuthenticated === false) {
    return <Navigate to="/admin/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
