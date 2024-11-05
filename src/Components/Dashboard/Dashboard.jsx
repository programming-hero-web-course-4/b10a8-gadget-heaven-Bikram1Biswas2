import { useContext, useState } from "react";
import { CartContext, WishListContext } from "../../main";
import { RxCross2 } from "react-icons/rx";
import { TbSortDescending } from "react-icons/tb";

const Dashboard = () => {
  const { cart } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);
  const [activeTab, setActiveTab] = useState("cart"); // "cart" or "wishlist"

  return (
    <div>
      <div className="hero bg-[#9538E2] text-white rounded-b-xl pb-44">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setActiveTab("cart")}
                className={`btn rounded-3xl px-7 text-[#9538E2] mb-2 ${activeTab === "cart" ? "bg-purple-500 text-white font-bold" : ""}`}
              >
                Cart
              </button>
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`btn rounded-3xl px-7 text-[#9538E2] mb-2 ${activeTab === "wishlist" ? "bg-purple-500 text-white font-bold" : ""}`}
              >
                Wish List
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 border-2 border-white p-4 rounded-xl">
        <div className="flex gap-2 justify-end font-bold">
          <button className="flex items-center text-purple-600 border-purple-500 rounded-2xl px-3 py-1 gap-2 bg-fuchsia-200">
            Sort By Price <TbSortDescending />
          </button>
          <button className="flex items-center text-purple-600 border-purple-500 rounded-2xl px-3 py-1 gap-2 bg-fuchsia-200">Purchase</button>
        </div>

        {/* Conditionally render cart or wishlist items based on the active tab */}
        {activeTab === "cart" ? (
          cart.length > 0 ? (
            cart.map((product, index) => (
              <div key={index} className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img className="w-[120px] h-[100px] rounded-xl" src={product.product_image} alt="Product" />
                        </div>
                      </td>
                      <td>
                        <span className="text-2xl font-bold">{product.product_title}</span>
                        <br />
                        <span className="mt-2">{product.description}</span>
                        <br />
                        <span className="font-semibold mt-2">Price: ${product.price}</span>
                      </td>
                      <th>
                        <button className="border border-red-500 text-red-600 rounded-full p-3"><RxCross2 /></button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">No items in the cart</p>
          )
        ) : (
          wishList.length > 0 ? (
            wishList.map((product, index) => (
              <div key={index} className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <img className="w-[120px] h-[100px] rounded-xl" src={product.product_image} alt="Product" />
                        </div>
                      </td>
                      <td>
                        <span className="text-2xl font-bold">{product.product_title}</span>
                        <br />
                        <span className="mt-2">{product.description}</span>
                        <br />
                        <span className="font-semibold mt-2">Price: ${product.price}</span>
                      </td>
                      <th>
                        <button className="border border-red-500 text-red-600 rounded-full p-3"><RxCross2 /></button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">No items in the wishlist</p>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
