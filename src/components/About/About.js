import React, { Fragment } from "react";

import "./About.css";
import herobg from "../../images/hero-bg.jpg";
import about from "../../images/about.jpg";
import Footer from "../Layout/Footer/Footer";

const About = () => {
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
              <h1 style={{ textAlign: "left" }}>About Us</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row ">
          <div class="col-12">
            <h3 class="section-heading">
              Our <font color="#3bad67">Mission</font>
            </h3>
            <p>
              The future of our society is highly dependent on technology, and
              we don’t want the common man to be left out. That’s why we create
              loT based products that cater to a wide range of users ranging
              from a rural farmer to the urban tech user. We want to make
              technology accessible for Indian consumers, so no one feels left
              out, both in terms of price and quality.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <h3 class="section-heading">
          <font color="#3bad67">About</font> Us
        </h3>
        <div class="row ">
          <div class="col-md-6">
            <p>
              Origin8 Smart Homes is a growing company that is recognized as a
              premier automation service provider. We are highly competent
              system integrators with a one-stop shop for all of your smart home
              requirements. Our engineers examine all devices for compatibility
              and determine which products are best suited to your needs. We
              have developed a wide range of automation devices that play an
              innovative role in the smart automation sector after years of R&D,
              prototyping, and testing. These products are developed to function
              with Indian household appliances. To deliver you the greatest home
              automation experience at accessible rates, we design and develop
              everything with conviction, heart and intelligence. Our home
              automation solutions allow you to engage with your home or have it
              respond to you. To supply you with world-class home automation
              solutions, we are always looking for the latest in technology,
              creativity, and ideas. Empowering our clients with the ability to
              control how the devices in their homes operate with the sole
              purpose of improving their living. At Alisan Smart Homes we
              provide you with seamless control over almost all aspects of your
              homes. We work towards a smarter nation for the smartest people.
            </p>
          </div>
          <div class="col-md-6">
            <img src={about} alt="about" className="img-fluid" />
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default About;
