import React, { Fragment } from "react";
import AdminHeader from "../Layout/Header/AdminHeader";
import Header from "../Layout/Header/Header";
import "./Home.css";
import dashbordimg from "../../images/dashboard.png";
import rooms from "../../images/rooms.png";
import herobg from "../../images/hero-bg.jpg";
import Footer from "../Layout/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={herobg} class="d-block w-100 height-fit" alt="..." />
            <div class="carousel-caption  d-md-block">
              <h1>
                <font color="#fb8d4e">PHONE</font> <font color="#fff">PE</font>{" "}
                <font color="#3bad67">HOME</font>
              </h1>
              <p>
                Control Your Home Aplliences
                <br />
                Anywhere Anytime
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="dashboard">
        <div className="container">
          <div className="main_box">
            <div className="lefcolumn">
              <img src={rooms} alt="dashboard" width="100%" />
            </div>
            <div className="rightcolumn">
              <h2 className="section-head">Dashboard</h2>
              <h3 className="section-subhead">STATUS COLUMNS</h3>
              <p className="section-text">
                THERE ARE THREE DIFFERENT COLUMNS WHICH TELLS YOU ABOUT THE
                NUMBER DEVICES THAT ARE NOT REACHABLE, TURNED ON AND TURNED OFF.
              </p>

              <h3 className="section-subhead">SHORTCUTS</h3>
              <p className="section-text">
                HERE YOU CAN ADD DIFFERENT SHORTCUTS FOR YOUR DIFFERENT DEVICES
                TO CONTROL THEM FROM THE DASHBOARD.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="dashboard">
        <div className="container">
          <div className="main_box">
            <div className="rightcolumn">
              <h2 className="section-head">Rooms</h2>
              <h3 className="section-subhead">ROOMS SCREEN</h3>
              <p className="section-text">
                HERE YOU'LL SEE ALL THE ROOMS CREATED BY YOU. CLICKING ON THE
                ROOM WILL TAKE YOU TO THE ROOM AND YOU'LL SEE ALL THE DEVICES IN
                THAT ROOM.
              </p>
            </div>
            <div className="lefcolumn">
              <img src={rooms} alt="dashboard" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="dashboard">
        <div className="container">
          <div className="main_box">
            <div className="lefcolumn">
              <img src={rooms} alt="dashboard" width="100%" />
            </div>

            <div className="rightcolumn">
              <h2 className="section-head">Rooms</h2>
              <h3 className="section-subhead">ROOMS SCREEN</h3>
              <p className="section-text">
                HERE YOU'LL SEE ALL THE ROOMS CREATED BY YOU. CLICKING ON THE
                ROOM WILL TAKE YOU TO THE ROOM AND YOU'LL SEE ALL THE DEVICES IN
                THAT ROOM.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="dashboard">
        <div className="container">
          <div className="main_box">
            <div className="rightcolumn">
              <h2 className="section-head">Rooms</h2>
              <h3 className="section-subhead">ROOMS SCREEN</h3>
              <p className="section-text">
                HERE YOU'LL SEE ALL THE ROOMS CREATED BY YOU. CLICKING ON THE
                ROOM WILL TAKE YOU TO THE ROOM AND YOU'LL SEE ALL THE DEVICES IN
                THAT ROOM.
              </p>
            </div>

            <div className="lefcolumn">
              <img src={rooms} alt="dashboard" width="100%" />
            </div>
          </div>
        </div>
  </div> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
