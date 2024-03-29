import React from "react";
import App from "./App.jsx";
import AuthService from "./components/AuthService.jsx";
import RegisterUser from "./components/RegisterUser.jsx";
import * as ReactDOM from "react-dom/client";
import ViewUsers from "./components/ViewUsers.jsx";
import CreatePasswordAuth from "./components/CreatePasswordAuth.jsx";
import PasswordAuth from "./components/passwordauth.jsx";
import CreateOTPAuth from "./components/CreateOTPAuth.jsx";
import OTPAuth from "./components/otpAuth.jsx";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import CreateDevice from "./components/createDevice.jsx";
import GetDevice from "./components/getDevice.jsx";
import CloneDevice from "./components/cloneDevice.jsx";
import AssignDevice from "./components/assignDevice.jsx";
import ProvisionDevice from "./components/provisiondevice.jsx";
import ApproveOTPAuth from "./components/approveotp.jsx";
import ApprovePushAuth from "./components/approveciba.jsx";
import Dashboard from "./components/dashboad.jsx";
import UpdateCiba from "./components/updateciba.jsx";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path:'/',
          element: <Dashboard/>,
        },
        {
          path: "/authentication",
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
        },
        {
          path: "pauthenticate",
          element : <PasswordAuth/>,
        },
        {
          path: "createOtpAuth",
          element: <CreateOTPAuth/>,
        },
        {
          path: 'otpAuth',
          element: <OTPAuth/>,
        },
        {
          path: 'createdevice',
          element: <CreateDevice/>,
        },
        {
          path: 'getdevice',
          element: <GetDevice/>,
        },
        {
          path: 'clonedevice',
          element: <CloneDevice/>,
        },
        {
          path: 'assigndevice',
          element: <AssignDevice/>,
        },
        {
          path: 'provisiondevice',
          element: <ProvisionDevice/>,
        },
        {
          path: 'approvetotp',
          element: <ApproveOTPAuth/>,
        },
        {
          path: 'approvepush',
          element: <ApprovePushAuth/>,
        },
        {
          path: 'updateCIBA',
          element: <UpdateCiba/>,
        }
      ],
    },

  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(

      <RouterProvider router={router} />
  
  );