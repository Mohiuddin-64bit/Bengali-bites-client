import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";  

const Chefs = ({chef}) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="w-full"><img src={chef.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{chef.name}</h2>
          <h2>Experience: {chef.experience}</h2>
          <h3>Recipes: {chef.num_recipes}</h3>
          <h3>
            <FontAwesomeIcon icon={faHeart} /> {chef.likes}
          </h3>
          <div className="card-actions justify-end">
            <Link to={`/chef/${chef.id}`} className="btn btn-primary">
              View Recipe's
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
