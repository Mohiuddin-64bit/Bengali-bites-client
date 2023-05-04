import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const ChefRecipes = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={chefData.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{chefData.name}</h1>
            <p className="py-6">{chefData.description}</p>
            <p><FontAwesomeIcon icon={faHeart} /> Likes: {chefData.likes}</p>
          </div>
        </div>
      </div>
      <h2 className="text-center font-bold my-12 text-3xl">
        Chef Recipe's Here
      </h2>
      
      <div className="grid grid-cols-3 container mx-auto mb-12 gap-9">
      {chefData.recipes.map((recipe) => <RecipeCard recipe={recipe} key={recipe.recipe_id}></RecipeCard>)}
      </div>
    </>
  );
};

export default ChefRecipes;
