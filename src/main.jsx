import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Dashboard from "./Components/Dashboard/Dashboard";
import CardsContainer from "./Components/CardsContainer/CardsContainer";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { toast, ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export const CartContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:products",
        element: <CardsContainer></CardsContainer>,
      },
      {
        path: "/gadgets/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

const MainApp = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
    toast.success("Product Added to Cart Successfully")
  }
   

       
  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <MainApp></MainApp>
   <ToastContainer></ToastContainer>
  </StrictMode>
);
