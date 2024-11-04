import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  console.log(gadgets);
    return (
        <div className="border-2 w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {
            gadgets.map(gadget => <Card gadget={gadget} key={gadget.product_id}></Card>) 
         }  
        </div>
    );
};

export default Cards;