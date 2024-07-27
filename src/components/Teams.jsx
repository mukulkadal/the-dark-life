import TeamCompo from "./TeamCompo";
import "./style.css";
// import gaurav from "../assets/images/gauravimg.jpg"
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { IoLogoTwitter } from "react-icons/io";
import gaurav from "../assets/images/gauravimg.jpg"
import mukul from "../assets/images/img22.jpg"
import sohit from "../assets/images/img24.jpg"
import saurav from "../assets/images/img30.jpg"
const Teams = () => {
  return (
    <>
      <div className="bg-[#e4e4dd] p-5 md:p-20 ">
        <div className="text-center w-[100%]  mx-auto">
          <div className="w-[100%] mx-auto">
            <h2 className="text-[30px] sm:text-[35px]">Team</h2>
            <p className=" w-[100%] md:w-[700px] lg:w-[900px] mx-auto text-justify md:text-center text-[15px] sm:text-[16px]">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="w-[100%] lg:flex justify-center items-center gap-10  md:max-w-[1240px] mx-auto mt-10">
          <TeamCompo  image={gaurav} title={"Hearterz Arya"} text={"Chief Executive Officer"} paragraph={"Explicabo voluptatem mollitia et repellat qui dolorum quasi "}/>
          <TeamCompo className="mt-12" image={mukul} title={"Mukul Kadal"} text={"Product Manager"} paragraph={"Aut maiores voluptates amet et quis praesentium qui senda para"}/>
          </div>
          <div className=" w-[100%]  lg:flex justify-center gap-10 items-center md:max-w-[1240px] mx-auto mt-6 sm:mt-10">
          <TeamCompo image={sohit} title={"Sohit Kadal"} text={"CTO"} paragraph={"Quisquam facilis cum velit laborum corrupti fuga rerum quia"}/>
          <TeamCompo image={saurav} title={"Saurav Spidy"} text={"Accountant"} paragraph={"Dolorum tempora officiis odit laborum officiis et et accusamus"}/>
          </div>
     
   
        </div>
      </div>
    </>
  );
};

export default Teams;
