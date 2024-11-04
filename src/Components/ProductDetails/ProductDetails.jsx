import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const id = parseInt(product_id);

  const product = data.find((product) => product.product_id === id);

  const {
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;
  return (
    <div className="relative">
      <div className="hero bg-[#9538E2] text-white rounded-b-xl pb-44 ">
        <div className="hero-content text-center ">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold">Product Details</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn rounded-3xl px-7 text-[#9538E2] mb-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-48 border-2 border-white rounded-xl backdrop-blur-md h-[300px] w-[950px] mb-20 ">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row ">
            <img
              src={product_image}
              className=" rounded-lg shadow-2xl w-[350px] h-full object-fill"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{product_title}</h1>
              <p className="font-bold">Price:${price}</p>

              <p>{description}</p>
              <p className="font-bold mb-2">Specification</p>
              <div>
                <ol className="list-decimal list-inside">
                  {Specification.map((specified, idx) => (
                    <li specified={specified} key={idx}>
                      {specified}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="font-bold">Rating</p>
              <div className="flex gap-3 items-center">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="bg-gray-300 rounded-2xl p-3">{rating}</p>
              </div>
            <div className="flex gap-2">
                <button className="p-3 flex items-center gap-2 bg-[#9538E2] rounded-2xl font-bold">Add To Cart <FaShoppingCart></FaShoppingCart> </button>
                <span className="border bg-white rounded-full text-[black] p-2 text-2xl font-bold text-center"> <CiHeart/></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
