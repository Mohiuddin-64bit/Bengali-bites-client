import React, { useEffect, useState } from "react";

import Chefs from "./Chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("img/food.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Hello there <br />
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
      </div>

        <div className="grid grid-cols-3 container mx-auto mb-12 gap-9">
        {chefs.map((chef) => <Chefs chef={chef} key={chef.id}></Chefs>)}
        </div>

      <h3 className="text-3xl text-center font-bold my-12 underline">
        Food Display Section
      </h3>
    </>
  );
};

export default Home;
