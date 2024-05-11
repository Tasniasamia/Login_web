// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App'
// import "@fontsource/montserrat";
// // import '/_utilities.scss'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import "@fontsource/montserrat";
import Login from "./routes/login";
import SignUp from "./routes/signup";
import Home from "./routes/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/",
        element:<Home/>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);