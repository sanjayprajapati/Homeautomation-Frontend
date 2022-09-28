import React, { Fragment, useEffect } from "react";
import { useSelector, useDisptch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import MetaData from "../Layout/Header/MetaDeta";
import Loader from "../Layout/Loader/Loader";
import "./Profile.css";
import ProflePic from "../../images/profil.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.user
  );
  console.log(user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.username}'s Profile`} />
          <div className="container">
            <div className="profile-wrap">
              <div className="leftsec">
                <h1>My Profile</h1>
                <img src={ProflePic} alt={user.username} />
                <Link to="/me/update">Edit Profile</Link>
              </div>
              <div className="rightsec">
                <h2>{user.username}</h2>
                <p>{user.email}</p>
                <p>{user.username}</p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
