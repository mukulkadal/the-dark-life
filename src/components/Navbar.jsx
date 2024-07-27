// import { IoSearch } from "react-icons/io5";
import gsap from "gsap";
import "./style.css";
// import { RiMenu3Fill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/navSlice";
import MainHeadText from "./MainHeadText";
const Navbar = () => {
  const [count, setCount] = useState(0);
  const isOpen = useSelector((state) => state.navbar.isOpen)
  const dispatch = useDispatch()
  useGSAP(() => {
    let tl = gsap.timeline();
    const navbar = () => {
      tl.from(
        "#logo",
        {
          y: -20,
          duration: 1,
          opacity: 0,
          delay: 0.5,
        },
        "-=0.5"
      );

      tl.from(
        "#list",
        {
          y: -20,
          duration: 1,
          opacity: 0,
          stagger: 0.3,
        },
        "-=1"
      );
    };
    navbar();

    const heading = () => {
      tl.from(
        "#heading",
        {
          y: 30,
          duration: 1,
          opacity: 0,
          scale: 0.5,
        },
        "-=1"
      );
      tl.from(
        "#mainBTN",
        {
          y: -50,
          duration: 1,
          opacity: 0,
        },
        "-=2"
      );
    };
    heading();
  });
  return (
    <>
      <div className="w-full h-screen" id="main_img" >
        <nav className=" py-4 px-4 md:px-10 absolute top-0 w-full z-20">
          <div className="md:flex justify-between items-center">
            <div className='w-full flex justify-between'>
              <div
                className=" font-light tracking-widest text-2xl text-white hover:text-red-400 text-[18px] md:text-[25px]"
                id="logo"
              >
                My Creation
              </div>
              <button
                onClick={() => dispatch(toggleNavbar())}
                className="text-white text-xl focus:outline-none md:hidden"
              >
                ☰
              </button>
            </div>


            <ul className={`md:flex md:space-x-4 uppercase text-[13px] lg:text-[16px]  whitespace-nowrap items-center text-white ${isOpen ? 'block' : 'hidden'}`}>
              <li className="hover:text-red-400" id="list">
                Home
              </li>
              <li onClick={() => setCount(count + 1)} className="hover:text-red-400" id="list">
              About us
            </li>
            <li onClick={() => setCount(count - 1)} className="hover:text-red-400" id="list">
              Products
            </li>
            <li className="hover:text-red-400" id="list">
              Faq
            </li>
            <Link to={"/"}
              id="list"
              className="uppercase border px-4 py-1 rounded-md hover:bg-red-900 hover:text-white"
            >
              MY account
            </Link>
            <li id="list" className="hover:text-red-400">
              CART {count}
            </li>
            </ul>
          </div>
        </nav>

        <div className=" w-full h-screen flex justify-center items-center bg-black  opacity-70  z-10">
<MainHeadText/>
        </div>


      </div>



    </>
  );
};

export default Navbar;
