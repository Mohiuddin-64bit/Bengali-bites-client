import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "./Navbar.css";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-12">
        <div className="lg:flex-1 block  ">
          <Link to="/" className="btn btn-ghost normal-case text-sm lg:text-xl">
            Bengali Bites
          </Link>
        </div>
        <div className="flex-none gap-4">
          {user ? (
            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p className="font-bold lg:block hidden ml-4">
                  {user.displayName || user.email}
                </p>
              </div>
              <button className="btn btn-success" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <Link to="login">
              <button className="btn btn-success">Log In</button>
            </Link>
          )}
          <div className=" menu lg:menu-horizontal lg:gap-8">
            <NavLink
              exact="true"
              to="/"
              activeclassname="active"
              className="font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              activeclassname="active"
              className="font-semibold"
            >
              Blog
            </NavLink>
            <NavLink
              to="/login"
              activeclassname="active"
              className="font-semibold"
            >
              Login
            </NavLink>
            <NavLink
              to="/registration"
              activeclassname="active"
              className="font-semibold"
            >
              Registration
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
