import { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const ScrollNavbarComponent = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo =
    "https://restho-nextjs.vercel.app/assets/images/header2-logo.svg";
  const logo1 =
    "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg";
  const image =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img444.png";
  const image1 =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img111.png";
  const image2 =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img222.png";
  const image3 =
    "https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img444.png";


    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const firstDivHeight = 200; // Example height of the first div in pixels

    if (scrollPosition >= firstDivHeight) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-950 p-4">
      <div className=" md:h-[200] w-full md:w-[85%] m-auto flex flex-col md:flex-row items-center justify-between mb-4">
        {/* Elements on top */}
        <p className="text-white mb-2 md:mb-0">
          <span className="text-[#946b12]">Opening Hour:</span> 9.00am to
          10.00pm
        </p>
        <p className="flex justify-between items-center gap-4">
          <p className="text-white flex items-center gap-2">
            <span className="text-[#946b12]">
              <AiOutlineMail />
            </span>
            info@example.com
          </p>
          <p className="text-white flex items-center gap-2">
            <span className="text-[#946b12]">
              <HiOutlineLocationMarker />
            </span>
            Road-01, Block-B, West London City
          </p>
        </p>
      </div>
      <nav
        className={`bg-white w-full md:w-[90%] m-auto flex sticky z-[999] items-center justify-between p-4 md:h-20${
          isNavbarFixed ? "fixed top-0 left-0 w-full bg-white shadow-md" : ""
        } rounded-full`}
      >
        {/* Navbar content */}
        <img className=" w-20 md:w-[100] md:h-[10] mr-2" src={logo} alt="Logo" />
        <div className=" hidden md:flex items-center">
          <ul className="flex space-x-4 font-bold">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Page</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="bg-[#946b12] text-white px-4 py-2 rounded-full md:h-12">
          Find Reservation
        </button>
        <div className="md:hidden">
          <GiHamburgerMenu className="text-[#946b12] text-2xl" onClick={toggleMenu} />
        </div>
      </nav>

           {/* Menu for small screens */}
           {isMenuOpen && (
        <div className="md:hidden p-4 font-bold text-white bg-gray-950 rounded-md">
          <ul className="flex flex-col space-y-2 font-bold ">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Page</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-start w-full md:w-[90%]  p-12">
        <div className="flex flex-col justify-between gap-4 items-start p-4 ">
          <div className="flex">
            <img src={logo1} alt="" />
            <p className="text-[#946b12] mx-2 md:text-base">
              {" "}
              Welcome To Restho{" "}
            </p>
            <img src={logo1} alt="" />
          </div>

          <p className="text-white text-5xl">
            Find Your Best Healthy & Tasty Food
          </p>

          <p className="text-white">
            it is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>

          <button className="rounded border border-[#946b12] text-[#946b12] px-4 py-2 hover:bg-[#946b12] hover:text-white transition duration-300 ease-in-out flex justify-between items-center gap-2">
            <AiOutlineArrowRight/> Discover More
          </button>

          {/* Content after the navbar */}
        </div>

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
      </div>
    </div>
  );
};

export default ScrollNavbarComponent;
