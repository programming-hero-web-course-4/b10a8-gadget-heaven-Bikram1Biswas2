import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
 
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[800px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
