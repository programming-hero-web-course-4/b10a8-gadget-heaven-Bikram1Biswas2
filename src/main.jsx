import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Dashboard from "./Components/Dashboard/Dashboard";
import CardsContainer from "./Components/CardsContainer/CardsContainer";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
       element:<Home></Home>, 
       children:[
        {
          path:"/category/:products",
          element:<CardsContainer></CardsContainer>,
         children:[
          {
            
          }
         ]
        }
       ]
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      }

    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
