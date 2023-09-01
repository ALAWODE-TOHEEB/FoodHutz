const GalleryStore = () => {
  const logo1 =
    "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg";

    const image1 = "https://spng.pngfind.com/pngs/s/48-489342_chef-top-chef-canada-matthew-stowe-hd-png.png";

    const image2 = "https://spng.pngfind.com/pngs/s/48-489342_chef-top-chef-canada-matthew-stowe-hd-png.png"
  return (
    <div>
      <div className="flex flex-col p-4">
        <div className="mx-auto">
          <span className="flex items-center gap-2">
            <img src={logo1} alt="" />
            <h4>Menu List</h4>
            <img src={logo1} alt="" />
          </span>
          <h1 className="text-gray-900 font-bold text-5xl">
            Our Special Gallery
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-around mt-8">
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryStore;
