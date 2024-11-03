import { Link, useLoaderData } from "react-router-dom";


const CardsContainer = ({categories}) => {

  return (
    <div className="mt-44">
      <h2 className="text-3xl text-center font-bold">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex gap-2 mt-6">
        {/* Side Menu */}
  
          <div className="border-2 w-1/5">
           {
            categories.map(category =><Link> <ul className="cursor-pointer bg-white" key={category.category} category={category}><li className="bg-gray-200 m-3 rounded-lg text-center p-3 font-bold">{category.category}</li></ul></Link>)
           }
          </div>

        {/* Cards */}
        <div className="border-2 w-4/5">
          <h2>Cards</h2>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
