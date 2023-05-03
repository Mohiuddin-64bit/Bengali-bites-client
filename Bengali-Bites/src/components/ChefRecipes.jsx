import React from "react";
import {
  faHeart,
  faBowlFood,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChefRecipes = () => {
  return (
    <>
      <div className="container hero min-h-screen bg-base-200 px-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-5">
            <h1 className="text-5xl font-bold">Karim ahmed</h1>
            <p className="py-6">
              Karim Ahmed is a renowned chef with a passion for creating
              exquisite dishes that blend traditional and contemporary flavors.
              With over 15 years of experience in the culinary world, Karim has
              honed his skills and developed a signature style that showcases
              his love for local ingredients and global influences. His
              commitment to excellence has earned him numerous accolades and a
              loyal following of food enthusiasts.
            </p>
            <p>
              <FontAwesomeIcon icon={faHeart} /> 8
            </p>
            <p>
              <FontAwesomeIcon icon={faBowlFood} /> 3
            </p>
            <p>4 year's Experience</p>
          </div>
        </div>
      </div>
      <h3 className="text-center font-bold text-3xl my-8">Chef's Recipes...</h3>
      <div className="">
        <div className="card w-96 bg-slate-500 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">recipe Name!</h2>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
            <p>Method Of cooking</p>
            
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefRecipes;
