import {FaPepperHot} from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai";


const ImageContainerComponent = () => {

    const logo1 =
    "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg";
  const image =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img2.png";
  const image1 =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-product-2.png";
  const image2 =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-product-3.png";
  const image3 =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-product-4.png";

  return (
    <div className="bg-white p-4">
      <div className="  md:flex md:flex-row flex-wrap justify-between items-center mb-4 w-full">
        <div className=" md:w-1/3 h-auto flex gap-2 items-center">
          <img src={image1} alt="Image 1" className="w-1/3 h-auto animate-spin" />

          <div>
            <h2>Meat Masala</h2>
            <p>Lorem ipsum dolor</p>
            <p>sit amet consectet</p>
          </div>
        </div>

        <div className="md:w-2/3 md:flex">
          <div className="md:w-1/2 h-auto flex gap-2  items-center my-4">
            <img src={image2} alt="Image 2" className="w-1/3 h-auto animate-spin" />
            <div>
              <h2>Meat Masala</h2>
              <p>Lorem ipsum dolor</p>
              <p>sit amet consectet</p>
            </div>
          </div>

          <span className="md:w-1/2 h-auto flex gap-2 items-center ">
            <img src={image3} alt="Image 3" className="w-1/3 h-auto animate-spin" />
            <div>
              <h2>Meat Masala</h2>
              <p>Lorem ipsum dolor</p>
              <p>sit amet consectet</p>
            </div>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex justify-center items-center p-4 md:w-1/2">
          <div className=" w-48 h-48 md:w-64 md:h-64">
            <div className="flex flex-col justify-around  rotate-45">
              <div className="flex">
                <img
                  src={image}
                  alt="Content Image"
                  className="w-1/2 h-auto rotate-45"
                />
                <img
                  src={image1}
                  alt="Content Image"
                  className="w-1/2 h-auto  rotate-45"
                />
              </div>
              <div className="flex mt-4">
                <img
                  src={image2}
                  alt="Content Image"
                  className="w-1/2 h-auto rotate-45"
                />
                <img
                  src={image3}
                  alt="Content Image"
                  className="w-1/2 h-auto rotate-45"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 mx-auto md:m-none w-1/2 bg-white p-4 rounded-md shadow-md">

        <div className="flex">
            <img src={logo1} alt="" />
            <p className="text-[#946b12] mx-2 md:text-base">
              About to Restho
            </p>
            <img src={logo1} alt="" />
          </div>
          {/* Content for the second inner div */}
          <h1 className="text-black font-bold">
            Come to Our Restaurant, Ready Your Food.
          </h1>

          <p className="my-2">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <div className="text-black flex gap-2 items-center">
            <FaPepperHot/>
            <p className="flex">
                <p>Pure Fresh</p>
                <p>We are serve different type of fresh food.</p>
            </p>
          </div>
          <div className="text-black flex gap-2 items-center">
            <FaPepperHot/>
            <p className="flex">
                <p>Experties Chef</p>
                <p>We are serve different type of fresh food.</p>
            </p>
          </div>
          <button className="rounded-full border border-[#946b12] text-[#946b12] px-4 py-2 hover:bg-[#946b12] my-2 hover:text-white transition duration-300 ease-in-out flex justify-between items-center gap-2">
            <AiOutlineArrowRight/> Discover More
          </button>


        </div>
      </div>
    </div>
  );
};

export default ImageContainerComponent;
