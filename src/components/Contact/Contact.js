import React, { Fragment } from "react";

import "./Contact.css";
import herobg from "../../images/hero-bg.jpg";

import Footer from "../Layout/Footer/Footer";

const Contact = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item fix-height active">
            <img src={herobg} class="d-block w-100" alt="..." />
            <div class="carousel-caption  d-md-block">
              <h1 style={{ textAlign: "left" }}>Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row ">
          <div class="col-md-5">
            <h4 className="subsec-heading">
              Enjoy peace of mind with
              <br />
              <font color="#3bad67"> Origin8 </font>Smart Home
            </h4>
            <p>
              B1104 Samridhi Grand <br />
              Greater Noida
              <br />
              UP 201306
            </p>
          </div>
          <div class="col-md-7">
            <h4 className="subsec-heading">
              Get In
              <font color="#3bad67"> Touch</font>
            </h4>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div class="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Messages"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Contact;
