import React, { useEffect } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import {
  AiFillDashboard,
  AiOutlineDashboard,
  AiOutlineCluster,
} from "react-icons/ai";
import { FaMicrochip } from "react-icons/fa";
import { BiMicrochip } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllControllers, getAllUsers } from "../../actions/userAction";
import AdminHeader from "../Layout/Header/AdminHeader";
import MetaData from "../Layout/Header/MetaDeta";

const Index = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.allUsers);
  const { controllers } = useSelector((state) => state.controllers);
  //console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      <MetaData title={`Dashboard`} />
      <AdminHeader />
      <div className="contentBar">
        <div className="lefPanel">
          <ul className="navigation">
            <li>
              <Link to="/admin/dashboard">
                <AiOutlineDashboard />
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/controllers">
                <BiMicrochip />
                <p>Controller</p>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/controllerstype">
                <AiOutlineCluster />
                <p>Controller Type</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="rightPanel">
          <div className="breadcrumb">
            <ul>
              <li>Home</li>
            </ul>
          </div>
          <div className="contentBox">
            <h2 className="pageHeading">Users List</h2>
            <table className="table">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Action</td>
                </tr>
              </thead>
              {users &&
                users.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td className="username">{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>
                        <Link to={`users/${item._id}`}>View</Link>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
