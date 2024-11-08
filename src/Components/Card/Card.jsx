import { Link } from "react-router-dom";

const Card = ({gadget}) => {
    const {product_id,product_title,product_image,price} = gadget;
    return ( 
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt="Gadgets"
            className="rounded-xl h-[150px] w-[200px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">{product_title}</h2>
          <p className="my-1 font-bold">Price:{price}</p>
          <div className="card-actions">
           <Link to={`/gadgets/${product_id}`}> <button className="btn btn-outline text-[#9538E2]">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Card;