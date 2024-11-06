import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CardsContainer from "../CardsContainer/CardsContainer";
import documentTitle from "../documentTitle";



const Home = () => {
    const categories = useLoaderData()
documentTitle("home")
    console.log(categories);

    return (
        <div>
           <Banner></Banner>
          
          <Outlet></Outlet>
    
        </div>
    );
};

export default Home;