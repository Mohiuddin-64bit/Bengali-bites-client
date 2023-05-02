import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
                <button className="btn btn-primary">View Recipe's</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-3xl text-center font-bold my-12 underline">
        Food Display Section
      </h3>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Home;
