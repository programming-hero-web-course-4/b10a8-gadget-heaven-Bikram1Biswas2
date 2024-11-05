import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CardsContainer from "../CardsContainer/CardsContainer";


const Home = () => {
    const categories = useLoaderData()

    console.log(categories);

    return (
        <div>
           <Banner></Banner>
           <CardsContainer></CardsContainer>
    
    
        </div>
    );
};

export default Home;