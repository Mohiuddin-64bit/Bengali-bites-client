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
import ErrorPage from "./components/ErrorPage.jsx";
import PrivateRoute from "./components/PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({params}) => fetch(`https://benglali-bites-server.vercel.app/chefs/${params.id}`)
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
