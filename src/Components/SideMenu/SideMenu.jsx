import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css"


const SideMenu = () => {
    const [categories,setCategories] = useState([])


    useEffect(()=>{
        fetch("/categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    
    return (
        <div className=" w-1/5 " id="sidebar">
        {categories.map((category) =>(
          <NavLink 
            to={`/category/${category.path}`}
            key={category.category_id}
            category={category}
          >
            <ul className="cursor-pointer bg-white">
              <li className="bg-gray-200 m-3 rounded-lg text-center p-3 font-bold">
                {category.category}
              </li>
            </ul>
          </NavLink>
        ))}
      </div>
    );
};

export default SideMenu;