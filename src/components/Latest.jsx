

import {
    AiOutlineArrowRight
  } from "react-icons/ai";
  
  const Latest = () => {
    const logo1 =
      "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg";
  
    const image1 =
      "https://spng.pngfind.com/pngs/s/48-489342_chef-top-chef-canada-matthew-stowe-hd-png.png";
  
    const image2 =
      "https://spng.pngfind.com/pngs/s/48-489342_chef-top-chef-canada-matthew-stowe-hd-png.png";
    return (
      <div>
        <div className="flex flex-col p-4">
          <div className="mx-auto">
            <span className="flex items-center gap-2">
              <img src={logo1} alt="" />
              <h4>Our Experties</h4>
              <img src={logo1} alt="" />
            </span>
            <h1 className="text-gray-900 font-bold text-5xl">
              Resthos Best Chef
            </h1>
          </div>
  
          <div className="flex flex-col md:flex-row gap-4 justify-around mt-8">
            <div>
              <img src={image1} alt="" />
              <div className="flex flex-col items-center justify-center">
                
                <h3>--- By Clone Watson</h3>
  
                <div className="flex flex-col justify-between gap-4">
                  <p>To Make Good Health Take Nutrition Food.</p>
                  <button className="rounded-full border border-[#946b12] text-[#946b12] px-4 py-2 hover:bg-[#946b12] my-2 hover:text-white transition duration-300 ease-in-out flex justify-between items-center ">
              <AiOutlineArrowRight /> 
            </button>
                </div>
              </div>
            </div>
  
            <div>
              <img src={image1} alt="" />
              <div className="flex flex-col items-center justify-center">
                
                <h3>--- By Hilary Watson</h3>
  
                <div className="flex flex-col justify-between gap-4">
                  <p>To Make Good Health Take Nutrition Food.</p>
                  <button className="rounded-full border border-[#946b12] text-[#946b12] px-4 py-2 hover:bg-[#946b12] my-2 hover:text-white transition duration-300 ease-in-out flex justify-between items-center ">
              <AiOutlineArrowRight /> 
            </button>
                </div>
              </div>
            </div>
  
            <div>
              <img src={image2} alt="" />
              <div className="flex flex-col items-center justify-center">
                
                <h3>--- By Clone Watson</h3>
  
                <div className="flex flex-col justify-between gap-4">
                  <p>Esay To Make Some Special Food In Home.</p>
                  <button className="rounded-full border border-[#946b12] text-[#946b12] px-4 py-2 hover:bg-[#946b12] my-2 hover:text-white transition duration-300 ease-in-out flex justify-between items-center ">
              <AiOutlineArrowRight /> 
            </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Latest;
  
