import "./style.css";

const AboutUs = () => {
  return (
    <>
      <div id="AboutImg" className="w-full h-screen md:h-[850px] bg-center bg-cover text-[#F8EDD9] bg-no-repeat relative">
        <div className="absolute top-[25%] right-[8%] w-[500px] hidden md:block">
          <h2 className="text-[#F8EDD9] hidden md:block text-[90px]">About Us</h2>
          <p className="text-justify hidden md:block">
            Murder Mystery “Home Before Dark” is Based on a Real Life Story
            Lysiak appeared on a Television Critics Association panel for Home
            Before Dark on January 19 (alongside Prince and the showrunners)
            and said that she “didn’t know a time where I didn’t love
            journalism My dad was a reporter for The New York Daily News when
            we lived in New York, and he was solving mysteries,we were doing
            it together. when we moved to Pennsylvania he quit his job, but I
            was not ready to stop reporting.”
          </p>
          <button className=" rounded-md mt-4 bg-[#700e0e] hover:bg-[#0f5E61] hover:text-white px-4 py-2  border-none text-[13px] font-medium uppercase"> About Us</button>
        </div>
        <button className=" md:hidden absolute bottom-5 right-[108px] rounded-md mt-4 bg-[#700e0e] hover:bg-[#0f5E61] hover:text-white px-4 py-2  border-none text-[13px] font-medium uppercase"> About Us</button>
      </div>
    </>
  );
};

export default AboutUs;
