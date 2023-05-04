import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromGroundWater,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
  const [fav, isFav] = useState(false);
  return (
    <div>
      <div className="card w-96 bg-indigo-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <h4 className="font-bold underline">Ingredients:</h4>
          <ul className="ml-8">
            {recipe.ingredients.map((ingre) => (
              <li>{ingre}</li>
            ))}
          </ul>
          <h4 className="font-bold underline">Cooking Method:</h4>
          <p>
            <FontAwesomeIcon icon={faStar} /> Rating: {recipe.rating}/5
          </p>
          <p className="text-gray-500">{recipe.cooking_method}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                isFav(!fav);
                toast.success("Added to favorites!");
              }}
              className="btn btn-primary"
            >
              Favorite
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
