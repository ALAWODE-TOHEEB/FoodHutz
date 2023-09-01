import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const BestChef = () => {
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
              <h1>Mr. Willium Jhon</h1>
              <h3>Chef of Head</h3>

              <div className="flex justify-between gap-4">
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillLinkedin />
                <AiFillTwitterSquare />
              </div>
            </div>
          </div>

          <div>
            <img src={image1} alt="" />
            <div className="flex flex-col items-center justify-center">
              <h1>Mile Woatson</h1>
              <h3>Chef of Head</h3>

              <div className="flex justify-between gap-4">
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillLinkedin />
                <AiFillTwitterSquare />
              </div>
            </div>
          </div>

          <div>
            <img src={image2} alt="" />
            <div className="flex flex-col items-center justify-center">
              <h1>Mr. Robert Jhon</h1>
              <h3>Chef of Head</h3>

              <div className="flex justify-between gap-4">
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillLinkedin />
                <AiFillTwitterSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestChef;
