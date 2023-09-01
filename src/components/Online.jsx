import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Online = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
    calendar: "",
    time: "8: 00 a.m",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can perform further actions with the form data
  };

  const logo1 =
    "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg";

  return (
    <div>
      <div className="flex flex-col p-4 bg-slate-900">
        <div className="mx-auto">
          <span className="flex items-center gap-2">
            <img src={logo1} alt="" />
            <h4 className="text-[#946b12]">Our Experties</h4>
            <img src={logo1} alt="" />
          </span>
          <h1 className="text-white font-bold text-5xl mb-4">
            For Online Reservation
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-4 md:w-[75%]">
              <input
                className="rounded-full bg-gray-800 w-full md:w-1/2 p-4"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                className="rounded-full bg-gray-800 w-full md:w-1/2 p-4"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:w-[75%] my-4">
              <input
             className="rounded-full bg-gray-800 w-full md:w-1/2 p-4"
                type="number"
                id="people"
                name="people"
                placeholder="Number of People"
                value={formData.people}
                onChange={handleInputChange}
                required
              />

              <input
              className="rounded-full bg-gray-800 w-full md:w-1/2 p-4 cursor-pointer"
                type="date"
                id="calendar"
                name="calendar"
                value={formData.calendar}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:w-[75%] ">
              <input
              className="rounded-full bg-gray-800 w-full md:w-1/2 p-4"
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />

              <input
                className="rounded-full bg-gray-800 w-full md:w-1/2 p-4"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <button className="rounded-full border  border-[#946b12] text-[#946b12] px-4 py-2 hover:bg-[#946b12] my-2 hover:text-white transition duration-300 ease-in-out flex justify-between items-center ">
              <AiOutlineArrowRight /> Reserved Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Online;
