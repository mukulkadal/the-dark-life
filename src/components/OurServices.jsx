import "./style.css";
import { IoStarOutline } from "react-icons/io5";
const OurServices = () => {
  return (
    <>

      <div className="w-full bg-[#D3D9D8] py-10">
      <h2 className="text-[30px] uppercase text-center mb-8">Our Services</h2>
        <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-6">
          <div className=" col-span-12 md:col-span-6 lg:col-span-4">
          <div className="w-[300px] mx-auto text-center ">
            <div className="bg-[#4E2B2B] rounded-full p-[10px] w-[90px] sm:w-[110px] mx-auto  flex justify-center">
              <IoStarOutline className="text-white text-[70px] sm:text-[90px] text-center" />
            </div>

            <h2 className="text-center text-[25px]">SEO</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, minus!
            </p>
          </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="w-[300px]  mx-auto text-center my-10 sm:my-0 ">
            <div className="bg-[#4E2B2B] rounded-full p-[10px] w-[90px] sm:w-[110px] mx-auto flex justify-center">
              <IoStarOutline className="text-white text-[70px] sm:text-[90px]" />
            </div>

            <h2 className="text-center text-[25px]">BRANDING
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, minus!
            </p>
          </div>
          </div>
          <div className=" col-span-12 md:col-span-12 lg:col-span-4">
          <div className="w-[300px] mx-auto text-center ">
            <div className="bg-[#4E2B2B] rounded-full p-[10px] w-[90px] sm:w-[110px] mx-auto flex justify-center ">
              <IoStarOutline className="text-white text-[70px] sm:text-[90px]" />
            </div>

            <h2 className="text-center text-[25px]">LOGO</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, minus!
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
