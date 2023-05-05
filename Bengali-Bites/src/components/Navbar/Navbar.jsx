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
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-12">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-sm lg:text-xl">
            Bengali Bites
          </Link>
        </div>
        <div className="flex-none gap-4">
          {user ? (
            <div className="flex items-center  gap-5">
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p className="font-bold ml-4">
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
          <button className="block md:hidden text-2xl" onClick={toggleMenu}>
            {showMenu ? <>&times;</> : <>&#9776;</>}
          </button>
          <div
            className={`flex-none md:flex gap-4 ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <NavLink
              exact='true'
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
