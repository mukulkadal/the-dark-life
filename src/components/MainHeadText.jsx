

const MainHeadText = () => {
  return (
    <>


      {/* <div>
        <div
          id="heading"
          className="absolute sm:top-[40%] sm:left-[24%] top-72 text-center left-9 text-[20px] lg:text-[165px] whitespace-nowrap font text-[#b5b5ae] font-light"
        >
          T<span className="text-[#af2727db]">h</span>e{" "}
          <span className="text-[#0f5E61]">
            D
          </span>
          ark Li
          <span className="text-[#305f89]">f</span>e
        </div>

        <button
          id="mainBTN"
          className=" absolute sm:top-[65%] sm:left-[45%] top-[380px] left-32 bg-[#b5b5ae] rounded-md hover:bg-[#700e0e] hover:text-white px-6 py-2 sm:px-10 sm:py-3 border-none "
        >
          Learn More
        </button>
      </div> */}


      <div className=" text-center ">
        <h1 id="heading" className="text-[#b5b5ae] text-[50px] sm:text-[100px] whitespace-nowrap"> T<span className="text-[#af2727db]">h</span>e{" "}
          <span className="text-[#0f5E61]">
            D
          </span>
          ark Li
          <span className="text-[#305f89]">f</span>e</h1>
        <button id="mainBTN" className="bg-[#b5b5ae] rounded-md hover:bg-[#700e0e] hover:text-white text-[13px] px-4 py-2 sm:px-6 sm:py-2 border-none" >Learn More</button>
      </div>


    </>
  )
}

export default MainHeadText