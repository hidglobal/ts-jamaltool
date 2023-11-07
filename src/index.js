import React from "react";
import App from "./App";
import AuthService from "./components/AuthService.jsx";
import RegisterUser from "./components/RegisterUser.js";
import * as ReactDOM from "react-dom/client";
import ViewUsers from "./components/ViewUsers";
import CreatePasswordAuth from "./components/CreatePasswordAuth";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <AuthService />,
        },
        {
            path: "/auth-server",
            element: <AuthService />,
          },
        {
            path: "register",
            element: <RegisterUser />,
        },
        {
          path: "Users",
          element: <ViewUsers />,
        },
        {
          path: "/createPasswordAuthenticator",
          element: <CreatePasswordAuth />,
        }
      ],
    },

  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );