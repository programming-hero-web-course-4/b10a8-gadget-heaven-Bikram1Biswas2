import { useEffect, useState } from "react";
import Card from "../Card/Card";



const Cards = ({gadget}) => {


    const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  console.log(gadgets);
    return (
        <div className=" w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
         {
            gadgets.map(gadget => <Card gadget={gadget} key={gadget.product_id}></Card>) 
         }  
         <h2></h2>
        </div>
    );
};

export default Cards;