import { Link } from "react-router-dom";
import bannerImg from "../../../public/assets/banner.jpg"

const Banner = () => {
    return (
<div className="relative">
<div className="hero bg-[#9538E2] text-white rounded-b-xl pb-44 ">
  <div className="hero-content text-center ">
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <Link to="/dashboard" className="btn rounded-3xl px-7 text-[#9538E2] mb-2">Shop Now</Link>
    </div>
  </div>
  
</div>
 <div className="mb-10 absolute left-1/2 transform -translate-x-1/2 -bottom-48 border-2 border-white p-4 rounded-xl backdrop-blur-md">
 <img className="w-[680px] h-[300px] rounded-xl" src={bannerImg} alt="" />
 </div>
</div>
    );
};

export default Banner;