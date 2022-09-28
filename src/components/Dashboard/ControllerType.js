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
import {
  getAllControllers,
  getAllControllerType,
  getAllUsers,
} from "../../actions/userAction";
import AdminHeader from "../Layout/Header/AdminHeader";
import MetaData from "../Layout/Header/MetaDeta";

const ControllerType = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.allUsers);
  const { controllers } = useSelector((state) => state.controllers);
  const { controllerType } = useSelector((state) => state.controllerType);
  //console.log(users);
  useEffect(() => {
    dispatch(getAllControllerType());
  }, []);
  return (
    <div>
      <MetaData title={`Controller Type`} />
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
          <div className="contentBox">
            <h2 className="pageHeading">Controllers Type</h2>
            <table className="table">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Number of switch</td>
                  <td>Action</td>
                </tr>
              </thead>
              {controllerType &&
                controllerType.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        {item.applianceType.map((e) => {
                          return e.numberOfAppliance;
                        })}
                      </td>
                      <td>
                        <Link to={`${item._id}`}>View</Link>
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

export default ControllerType;
