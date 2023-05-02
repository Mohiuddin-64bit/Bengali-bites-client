import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 px-12">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Bengali Bites</a>
        </div>
        <div className="flex-none gap-12">
            <Link>Home</Link>
            <Link>Blog</Link>
            <Link to='login'>Login</Link>
            <Link to='registration'>Registration</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
