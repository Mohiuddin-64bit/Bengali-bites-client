import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col">
      <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLqUXBcmnc834XD0gzpnIUOknrQgNegJlOEkQW_LV&s" alt="Shoes" /></figure>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Page Not Found</h1>
          <p className="py-6">

          </p>
          <Link><button className="btn btn-primary">Go Back</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
