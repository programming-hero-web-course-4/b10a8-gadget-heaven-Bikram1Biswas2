import { useContext, useState } from "react";
import { CartContext, WishListContext } from "../../main";
import { RxCross2 } from "react-icons/rx";
import { TbSortDescending } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Dashboard = () => {
  
  const { cart ,setCart} = useContext(CartContext);
  const { wishList } = useContext(WishListContext);
  const [activeTab, setActiveTab] = useState("cart"); 
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const [isModalOpen,setIsModalOpen]= useState(false)
  const navigate = useNavigate()

  const totalPrice = cart.reduce((sum,item) =>sum + item.price,0)

  const handlePurchase = ()=> {
    if(cart.length>0){
        setPurchaseTotal(totalPrice);
        setIsModalOpen(true);
        setCart([])
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    navigate("/")
  }

//   Sort
const sortByPriceDescending = () => {
    const sorted = [...cart].sort((a,b)=>b.price-a.price)
setCart(sorted)
}

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
                className={`btn rounded-3xl px-7 text-[#9538E2] mb-2 ${
                  activeTab === "cart" ? "bg-purple-300 text-black font-bold" : ""
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`btn rounded-3xl px-7 text-[#9538E2] mb-2 ${
                  activeTab === "wishlist" ? "bg-purple-300 text-black font-bold" : ""
                }`}
              >
                Wish List
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 border-2 border-white p-4 rounded-xl">
        <div className="flex gap-2 justify-end font-bold">
          <button onClick={sortByPriceDescending} className="flex items-center text-purple-600 border-purple-500 rounded-2xl px-3 py-1 gap-2 bg-fuchsia-200">
            Sort By Price <TbSortDescending />
          </button>
          <button onClick={handlePurchase} className="flex items-center text-purple-600 border-purple-500 rounded-2xl px-3 py-1 gap-2 bg-fuchsia-200" 
          disabled={cart.length === 0 || totalPrice === 0}
          >Purchase</button>
        </div>

        {/* Conditionally render heading based on the active tab */}
        {activeTab === "cart" && cart.length > 0 && (
          <div className="text-center mt-3">
          <h2 className="text-3xl font-bold">Cart Items</h2>
          <p className="text-xl font-semibold mt-2">Total Price: ${totalPrice}</p>
        </div>
           
        )}
        {activeTab === "wishlist" && wishList.length > 0 && (
          <h2 className="text-3xl font-bold text-center mt-3">Wish List Items</h2>
        )}

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
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md text-center">
           <p className="mx-auto text-center font-bold text-5xl text-purple-400"> <BiSolidBadgeCheck /></p>
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p>Your purchase was successful!</p>
              <p>Thanks for Purchasing</p>
              <p>Total:${purchaseTotal}</p>
              <button className="mt-4 btn bg-blue-500 text-white px-4 py-2 rounded" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
