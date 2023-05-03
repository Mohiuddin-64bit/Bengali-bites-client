import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("../../public/img/food.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Hello there <br />{" "}
              <span className="text-yellow-300 text-5xl">
                This is Bengali bites
              </span>
            </h1>
            <p className="mb-5 text-lg text-center">
              "Bengali Bites - where culinary delights meet Bengali flavors.
              Discover the magic of traditional recipes and unique dishes from
              top chefs. Indulge in our special menu and elevate your taste buds
              to new heights!"
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl text-center font-bold my-12 underline">
          Chef's Section
        </h3>
        <div className="grid grid-cols-3 container mx-auto mb-12">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chef's name</h2>
              <h2>3 year's Experience</h2>
              <h3>8 Recipes</h3>
              <h3>
                <FontAwesomeIcon icon={faHeart} /> 8
              </h3>
              <div className="card-actions justify-end">
                <Link to='recipes' className="btn btn-primary">View Recipe's</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-3xl text-center font-bold my-12 underline">
        Food Display Section
      </h3>
      
    </>
  );
};

export default Home;
