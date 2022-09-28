import React, { useEffect, useRef, useState } from "react";
import "./Index.css";
import { Link, useParams } from "react-router-dom";
import {
  AiFillDashboard,
  AiOutlineDashboard,
  AiOutlineCluster,
} from "react-icons/ai";
import { FaMicrochip } from "react-icons/fa";
import { BiMicrochip } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader/Loader";
import { QRCode } from "react-qrcode-logo";
import logo from "../../images/qr-logo.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getDevicesByControllerId } from "../../controller/controllers";
import AdminHeader from "../Layout/Header/AdminHeader";
import { async } from "rxjs";
import { downloadFile } from "../../controller/controllers";
import MetaData from "../Layout/Header/MetaDeta";

const ControllerTypeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [url, setUrl] = useState();
  const [options, setOptions] = useState();
  const [devices, setDevices] = useState([]);

  const [err, setErr] = useState(null);
  const { users } = useSelector((state) => state.allUsers);
  const { controllers, loading } = useSelector((state) => state.controllers);
  const [isLoading, setIsLoading] = useState(true);
  //console.log(users);

  const handleDownload = async (id) => {
    console.log("id", id);
    let response = await downloadFile(id);

    const type = response.headers["content-type"];
    const blob = new Blob([response.data], { type: type, encoding: "UTF-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "main.ino";
    link.click();
  };
  useEffect(() => {
    let loadData = async () => {
      let res = await getDevicesByControllerId(id);
      console.log(res);

      setDevices([...res]);
    };
    loadData();
    console.log("devices", devices);
  }, []);

  return (
    <div>
      <MetaData title={`Controller: ${id}`} />
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
            {controllers &&
              controllers.map((item, index) => {
                if (item._id == id) {
                  return (
                    <div className="" key={item._id}>
                      <div className="group">
                        <div className="copycode">
                          <p>Download File : &nbsp;</p>
                          <button
                            className="btn"
                            onClick={() => handleDownload(item._id)}
                          >
                            Download Flie
                          </button>
                        </div>
                      </div>
                      <div className="group">
                        <div className="copycode">
                          <p>Appkey : </p>
                          <div className="code" id="appkey">
                            {item.appkey}
                          </div>
                          <CopyToClipboard text={item.appkey}>
                            <button className="btn">Copy</button>
                          </CopyToClipboard>
                        </div>
                      </div>
                      <div className="group">
                        <div className="copycode">
                          <p>Appsecret : </p>
                          <div className="code" id="appsecret">
                            {item.appsecret}
                          </div>
                          <CopyToClipboard text={item.appsecret}>
                            <button className="btn">Copy</button>
                          </CopyToClipboard>
                        </div>
                      </div>
                      <div className="group">
                        <div className="copycode">
                          <p>Device ID : &nbsp;</p>
                          <div className="code" id="controllerId">
                            {item.controllerId}
                          </div>
                          <CopyToClipboard text={item.controllerId}>
                            <button className="btn">Copy</button>
                          </CopyToClipboard>
                        </div>
                      </div>
                      {devices &&
                        devices.map((e) => {
                          return (
                            <div className="group" key={e._id}>
                              <div className="copycode">
                                <p> {e.name} </p>
                                <div className="code">{e._id}</div>
                                <CopyToClipboard text={e._id}>
                                  <button className="btn">Copy</button>
                                </CopyToClipboard>
                              </div>
                            </div>
                          );
                        })}

                      <QRCode
                        value={item.controllerId}
                        fgColor="#7f0000"
                        includeMargin
                        imageSettings={{
                          excavate: true,
                        }}
                        logoImage={logo}
                        logoWidth={40}
                        logoHeight={40}
                        ecLevel="M"
                        enableCORS={false}
                        size={200}
                        quietZone={10}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControllerTypeDetail;
