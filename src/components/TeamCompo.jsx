import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
function TeamCompo({image, title, text, paragraph}){
  return (
    <>
    
    <div className=" bg-white md:flex justify-center items-center rounded-md w-[100%] md:w-[600px] lg:w-[700px] mx-auto md:gap-[30px] p-6 my-7 lg:my-0">
                <img className=" sm:rounded-full w-[320px] h-[320px] sm:w-[250px]  sm:mx-auto sm:h-[250px]  md:w-[150px]  mx-auto md:h-[150px] " src={image} alt="" />
                <div className="">
                    <h1 className="text-center sm:text-start  text-[24px] mt-2 sm:mt-0"> {title}</h1>
                    <h3 className="text-center sm:text-start whitespace-nowrap text-[15px] sm:text-[19px] my-[2px] sm:my-0"> {text}</h3>
                    <p className="text-center sm:text-start text-[13px] sm:text-[15px] text-gray-500 sm:text-black ">{paragraph }</p>
                    <div className="flex justify-center sm:justify-start gap-[15px] mt-4 sm:mt-2 text-[20px]">
                    <FaLinkedin className="hover:text-[#0F5E61]" />
                    <FaFacebook className="hover:text-[#0F5E61]"/>
                    <FaInstagram className="hover:text-[#0F5E61]"/>
                    <IoLogoTwitter className="hover:text-[#0F5E61]"/>
                    </div>
                </div>
            </div>
    
    
    
    </>
  )
}

export default TeamCompo