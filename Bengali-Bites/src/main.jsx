import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import ChefRecipes from "./components/ChefRecipes.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "chef/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
