import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  const logo =
    "https://restho-nextjs.vercel.app/assets/images/header1-logo.svg";
  const image =
    "https://restho-nextjs.vercel.app/assets/images/icon/footer-shape.svg";
  return (
    <div>
      <div className="bg-slate-800 p-4">
        <div>
          <h1 className="text-white">Our Facilities</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-4">
          <div>
            <ul className="text-white">
              <li>India Menu</li>
              <li>Menu Item</li>
              <li>Private Event</li>
              <li> Italian Menu</li>
              <li> Best Offer</li>
            </ul>
          </div>

          <div className="text-white">
            <ul>
              <li>Popular Item</li>
              <li>Regular Menu</li>
              <li>New Food</li>
              <li>Special Offer</li>
            </ul>
          </div>

          <div className=" border border-gray-500 rounded-full p-8 ">
            <img src={logo} alt="" className="rounded-sm" />
            <h1 className="font-bold text-white">Established . 2022</h1>
            <span className="flex gap-2">
              <p className="text-white">---</p>
              <img src={image} alt="" />
              <p className="text-white">---</p>
            </span>
            <span className="flex justify-center gap-3 text-white">
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillTwitterSquare />
            </span>
          </div>

          <div>
            <h1 className="text-white">Address Info</h1>
            <ul className="text-white">
              <li>Phone: +880-1776-766-767</li>
              <li>Email: info@example.com</li>
              <li>Fax ID: +99-75667-786</li>
              <li>Location: Mirpur DOHS,House-167/170, Road-02 Avenue-01.</li>
            </ul>
          </div>

        </div>

        <div className="my-4 text-white">
            <hr />

            <div>
            <p>@Copyright by Egenslab-2023, All Right Reserved.</p>
            <p>Privacy & Policy | Terms and Conditions</p>
            </div>


        </div>

      </div>
    </div>
  );
};

export default Footer;
