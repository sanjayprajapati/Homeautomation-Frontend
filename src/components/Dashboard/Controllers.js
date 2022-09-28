import React, { useEffect, useRef, useState } from "react";
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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createControllers } from "../../controller/controllers";
import Loader from "../Layout/Loader/Loader";
import AdminHeader from "../Layout/Header/AdminHeader";
import MetaData from "../Layout/Header/MetaDeta";
import { windowWhen } from "rxjs";

const controllerSchema = Yup.object().shape({
  ctype: Yup.string().required("Required"),
});

const Controllers = () => {
  const dispatch = useDispatch();

  const used = useRef(null);
  const unused = useRef(null);
  const create = useRef(null);
  // used btns
  const usedBtn = useRef(null);
  const unusedBtn = useRef(null);
  const createBtn = useRef(null);
  const switcherTab = useRef(null);
  const [ctype, setCtype] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [err, setErr] = useState(null);
  const { users } = useSelector((state) => state.allUsers);

  const { controllers, loading } = useSelector((state) => state.controllers);
  const { controllerType } = useSelector((state) => state.controllerType);
  const [isLoading, setIsLoading] = useState(true);
  //console.log(users);
  const switchTabs = (e, tab) => {
    if (tab == "used") {
      used.current.classList.add("inview");
      usedBtn.current.classList.add("active");
      unusedBtn.current.classList.remove("active");
      createBtn.current.classList.remove("active");
      unused.current.classList.remove("inview");
      create.current.classList.remove("inview");
    }
    if (tab == "unused") {
      used.current.classList.remove("inview");
      unused.current.classList.add("inview");
      create.current.classList.remove("inview");
      usedBtn.current.classList.remove("active");
      unusedBtn.current.classList.add("active");
      createBtn.current.classList.remove("active");
    }
    if (tab == "create") {
      used.current.classList.remove("inview");
      unused.current.classList.remove("inview");
      create.current.classList.add("inview");
      usedBtn.current.classList.remove("active");
      unusedBtn.current.classList.remove("active");
      createBtn.current.classList.add("active");
    }
  };
  useEffect(() => {
    dispatch(getAllControllers());
    dispatch(getAllControllerType());
    setCtype(...controllerType);
    setIsLoading(false);
  }, []);

  const createController = async (values) => {
    setIsLoading(true);
    let res = await createControllers(values.ctype);

    if (res.success) {
      //console.log(res);
      dispatch(getAllControllers());
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <MetaData title={`Controller`} />
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
            <h2 className="pageHeading">Controllers</h2>
            <div className="tabs">
              <button
                onClick={(e) => switchTabs(e, "used")}
                className="active btn"
                ref={usedBtn}
              >
                Used
              </button>
              <button
                onClick={(e) => switchTabs(e, "unused")}
                ref={unusedBtn}
                className=" btn"
              >
                Unused
              </button>
              <button
                onClick={(e) => switchTabs(e, "create")}
                ref={createBtn}
                className="btn"
              >
                create new
              </button>
            </div>
            <div className=" tabsbox inview" ref={used}>
              <table className="table">
                <thead>
                  <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>User</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {controllers &&
                    controllers.map((item, index) => {
                      if (item.assigned == true) {
                        return (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item._id}</td>
                            <td>
                              {users &&
                                users.map((e) => {
                                  if (e._id == item.assignedUser) {
                                    return `${e.email} / ${e.mobile}`;
                                  }
                                })}
                            </td>

                            <td>
                              <Link to={`${item._id}`}>View</Link>
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
            <div className="tabsbox" ref={unused}>
              <table className="table">
                <thead>
                  <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>User</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {controllers &&
                    controllers.map((item, index) => {
                      if (item.assigned == false) {
                        return (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>Admin</td>
                            <td>
                              <Link to={`${item._id}`}>View</Link>
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
            <div className="tabsbox" ref={create}>
              <div className="create-new">
                <h3 className="subhead">Create Controller</h3>
                <Formik
                  initialValues={{ ctype: "" }}
                  validationSchema={controllerSchema}
                  className="create-controller"
                  onSubmit={createController}
                >
                  {({ isSubmitting, handleChange, errors, touched }) => (
                    <Form>
                      <div className="group">
                        <Field component="select" name="ctype">
                          <option value="">Select</option>
                          {controllerType &&
                            controllerType.map((e) => (
                              <option key={e._id} value={e._id}>
                                {e.name}
                              </option>
                            ))}
                        </Field>
                        {errors.ctype && touched.ctype ? (
                          <div className="error">{errors.ctype}</div>
                        ) : null}
                      </div>
                      <div className="group">
                        <input
                          type="submit"
                          value="Create"
                          className="submit"
                          disabled={isSubmitting}
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controllers;
