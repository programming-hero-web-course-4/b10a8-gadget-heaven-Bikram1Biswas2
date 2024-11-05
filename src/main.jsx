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
export const WishListContext = createContext();

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
  const [cart, setCart] = useState([]);
  const [wishList,setWishList]= useState([])

  // WishList
const addToWishList = (product) => {
  const alreadyInWishList = wishList.find((item) => item.product_id === product.product_id)
  if(alreadyInWishList){
    toast.warn(`${product.product_title} is already in WishList`)
  }else{
    setWishList((prevWishList)=>[...prevWishList,product])
    toast.success(`${product.product_title} added to WishList successfully`)
  }
}


  // Add To Cart
  const addToCart = (product) => {
    // Check if the product is already in the cart using product_id
    const alreadyInCart = cart.find((item) => item.product_id === product.product_id);

    if (alreadyInCart) {
      // Show a warning if the product is already in the cart
      toast.warn(`${product.product_title} is already in the cart`);
    } else {
      // Add the product to the cart if it's not there
      setCart((prevCart) => [...prevCart, product]);
      toast.success(`${product.product_title} added to cart successfully`);
    }
  };




       
  return (
    <CartContext.Provider value={{ cartCount:cart.length, addToCart ,cart,setCart}}>
      <WishListContext.Provider value={{addToWishList,wishList,WishListCount:wishList.length,setWishList}}>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
      </WishListContext.Provider>
     
    </CartContext.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <MainApp></MainApp>
  </StrictMode>
);
