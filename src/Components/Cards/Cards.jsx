import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";



const Cards = ({gadget}) => {
const {category}= useParams()

    const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => handleCategory(data));
  }, [category]);

  const handleCategory = products => {
     if(category === "allProduct"){
       setGadgets(products)
     }else{
      const  ProductCategory = products.filter(product => product.category === category)
      setGadgets(ProductCategory)
     }
  }

  console.log(gadgets);
    return (
        <div className=" w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
         {
            gadgets.map(gadget => <Card gadget={gadget} key={gadget.product_id}></Card>) 
         }  
        </div>
    );
};

export default Cards;