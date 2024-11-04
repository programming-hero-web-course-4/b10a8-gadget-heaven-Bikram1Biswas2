import { useLoaderData, useParams } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import Cards from "../Cards/Cards";

const CardsContainer = () => {
    // const gadgets = useLoaderData()
    // console.log(gadgets);

  const { category } = useParams();

  return (
    <div className="mt-44">
      <h2 className="text-3xl text-center font-bold">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-2 mt-6">
        {/* Side Menu */}

        <SideMenu></SideMenu>

        {/* Cards */}
        <Cards></Cards>
      </div>
    </div>
  );
};

export default CardsContainer;
