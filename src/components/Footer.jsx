import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <>
   <div className="bg-[#424040] px-5  py-10">
   <div className=" max-w-[1440px] mx-auto  grid grid-cols-12 gap-10 md:gap-0 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 text-white leading-10 w-[300px]">
         <h2 className="text-[25px] md:text-[32px] lg:text-[25px] xl:text-[32px] ">My Creation</h2>
          <p className="text-[14px] sm:text-[16px] lg:text-[14px]">A108 Adam Street New York, <br /> NY 535022 United States</p>
          <p className="text-[14px] sm:text-[16px] lg:text-[14px]">Phone : +1 5589 55488 55</p>
          <p className="text-[14px] sm:text-[16px] lg:text-[14px]">Email : info@example.com</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 text-white w-[300px]">
          <h2 className="text-[25px] md:text-[32px] lg:text-[25px] xl:text-[32px]">Our Services</h2>
          <ul className="leading-10 text-[14px] sm:text-[16px] md:text-[19px] lg:text-[14px]">
            <li>Web Desing</li>
            <li>Web Development</li> 
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Desing</li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-3 text-white w-[300px]">
          <h2 className="text-[25px] lg:text-[25px] xl:text-[32px]">Useful Links</h2>
          <ul className="leading-10 text-[14px] sm:text-[16px] md:text-[19px] lg:text-[14px]">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3 text-white sm:leading-8 w-[300px] mt-2 lg:mt-0">
          <h2 className="text-[25px] lg:text-[25px] xl:text-[32px] whitespace-nowrap mb-3">Our Social Networks</h2>
          <p className="text-[14px] sm:text-[16px] lg:text-[14px] xl:text-[16px]  my-4 sm:my-0">
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="flex justify-start items-center gap-4 mt-3">
            <div className="bg-[#0077B5] w-9 h-9 rounded-full flex justify-center items-center">
            <FaLinkedin className="text-[18px]"/>
            </div>
            <div className="bg-[#1877F2] w-9 h-9 rounded-full flex justify-center items-center">
            <FaFacebook className="text-[18px]"/>
            </div>
            <div className="bg-[#DC356B] w-9 h-9 rounded-full flex justify-center items-center">
            <FiInstagram className="text-[18px]"/>
            </div>
            <div className="bg-[#1D9CEB] w-9 h-9 rounded-full flex justify-center items-center">
            <FaTwitter className="text-[18px]"/>
            </div>
          </div>
        </div>
      </div>
   </div>
    </>
  );
};

export default Footer;
