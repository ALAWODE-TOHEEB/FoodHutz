

const ResthoNew = () => {

    const logo1 =
    "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg";

    const image = "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items13.png";

    const image2 = "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items11.png";

    const image3 = "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items11.png"

  return (
    <div className=" justify-center items-center bg-gray-700">
        <div className="flex flex-col">
      <div className="mx-auto mt-4">
           <span className="flex">
             <img src={logo1} alt="" />
            <h4>Our New Item</h4>
            <img src={logo1} alt="" />
            </span>
            <h1 className="text-[#946b12] mx-2 md:text-base text-5xl font-bold">
               Restho New Item List
            </h1>
            <p>
            Various versions have evolved over the years, sometimes on purpose.    
            </p>
          </div>

          <div className="md:flex gap-1 flex-wrap justify-around items-center">
            <div className="text-white p-3">
        <img src={image} alt="" />
        <p className="">prawn with Noodles</p>
        <p>it is a long established fact that a reader wil be distracted</p>
            </div>

            <div className="text-white p-3">
        <img src={image2} alt="" />
        <p>prawn with Noodles</p>
        <p>it is a long established fact that a reader wil be distracted</p>
            </div>

            <div className="text-white p-3">
        <img src={image3} alt="" />
        <p>prawn with Noodles</p>
        <p>it is a long established fact that a reader wil be distracted</p>
            </div>

          </div>

          </div>
    </div>
  )
}

export default ResthoNew
