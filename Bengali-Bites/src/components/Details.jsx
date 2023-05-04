import React from "react";

const Details = () => {
  return (
    <div>
      <h3 className="text-5xl text-center font-bold my-24 ">
        Our Website Details
      </h3>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">
              Discover the Flavors and Culture of Bengali Cuisine through a
              Chef's Website
            </h1>
            <p className="py-6">
              Bengali-Bites is a website that showcases recipes from the Bengali
              cuisine, which is one of the most diverse and flavorful cuisines
              in South Asia. The website features a variety of recipes that are
              inspired by the Bengali culture and traditions, including
              vegetarian and non-vegetarian dishes, snacks, desserts, and
              drinks. The website provides an easy-to-use interface for users to
              browse and search for recipes based on different categories, such
              as main course, appetizers, desserts, and more. Each recipe comes
              with detailed instructions, ingredients, and cooking time, making
              it easy for users to recreate the dishes at home. Bengali-Bites
              also features a section on chefs, where users can learn more about
              the chefs behind the recipes and their background in the culinary
              world. Users can also follow their favorite chefs on the website
              and get updates on their latest recipes and cooking tips. Overall,
              Bengali-Bites is a great resource for anyone interested in Bengali
              cuisine or looking to try out new and exciting recipes from South
              Asia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
