import { useContext } from "react";
import { CartContext } from "../../main";
import { RxCross2 } from "react-icons/rx";

const Dashboard = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div className="">
        <div className="hero bg-[#9538E2] text-white rounded-b-xl pb-44 ">
          <div className="hero-content text-center ">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">
              Dashboard
              </h1>
              <p className="py-6">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
              <div className="flex gap-3 justify-center">
              <button className="btn rounded-3xl px-7 text-[#9538E2] mb-2">
                Cart
              </button>
              <button className="btn rounded-3xl px-7 text-[#9538E2] mb-2">
             Wish List
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 border-2 border-white p-4 rounded-xl">
        <div>
        {cart.map((product, index) => (
          <div product={product} key={index} className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="">
                      <div className="">
                        <img className="w-[120px] h-[100px] rounded-xl"
                          src={product.product_image}
                          alt="Products" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                    
                    </div>
                  </div>
                </td>
                <td className="">
              <span className="text-2xl font-bold">{product.product_title}</span>
                  <br />
                  <span className="mt-2">{product.description}</span>
                  <br />
                  <span className="font-semibold mt-2">Price:${product.price}</span>
                </td>
        
                <th>
                  <button className="border border-red-500 text-red-600 rounded-full p-3"><RxCross2 /></button>
                </th>
              </tr>
            </tbody>
            {/* foot */}
           
          </table>
        </div>
        ))}
      </div>
        </div>
      </div>
     
    </div>
  );
};

export default Dashboard;
