import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const SideMenu = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("/categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="border-2 w-1/5">
        {categories.map((category) =>(
          <NavLink
            to={`category/${category.category}`}
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