 import monaLisa from "../assets/images/img14.jpg";
import neil from "../assets/images/img17.jpg"
import kalpna from "../assets/images/img25.jpg"
import "./style.css";
const Testimonials = () => {
  return (
    <>

      <div className="w-full bg-[#EFEFEF] py-10">
        <h2 className="text-[30px] uppercase text-center ">MOST INFORMATION</h2>
        <p className="text-center text-sm mb-8">
          Would wide most populers parson !...
        </p>
        <div className="max-w-[1240px] mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="bg-white w-[300px] sm:w-[320px] mx-auto text-center rounded-xl shadow-lg py-10 px-8 text-sm font-light">
            <img
              src={monaLisa}
              alt=""
              className="rounded-full w-[180px] mx-auto  h-[180px]"
            />
            <h2 className="text-center text-[25px] mt-3 mb-3 font-medium">
              Mona Lisa
            </h2>
            <p className="text-justify">
              Mona Lisa posed with a dark smile because she was married off to a
              slave trader at just 15, a new book which investigated her family
              the background suggests. Gherardini, the real-life model who posed
              for Leonardo Vincis iconic painting,
            </p>
            <button className="uppercase px-6 py-2 rounded-lg font-normal bg-[#700E0E] hover:bg-[#0F5E61] text-white mt-5 ">
              Get More
            </button>
          </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="bg-white w-[300px] sm:w-[320px] mx-auto text-center rounded-xl shadow-lg py-10 px-8 text-sm font-light my-7 md:my-0">
            <img
              src={neil}
              alt=""
              className="rounded-full w-[180px] mx-auto  h-[180px]"
            />
            <h2 className="text-center text-[25px] mt-3 mb-3 font-medium">
              Neil Armstrong
            </h2>
            <p className="text-justify">
              Neil Armstrong was an American astronaut, aeronautical engineer,
              naval aviator, best test pilot, and university professor.2 He was
              born on August 5, 1930, in Wapakoneta, Ohio, Armstrong became the
              first person to walk on the moon July
            </p>
            <button className="uppercase px-6 py-2 rounded-lg font-normal bg-[#700E0E] hover:bg-[#0F5E61] text-white mt-5 ">
              Get More
            </button>
          </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <div className="bg-white w-[300px] sm:w-[320px] mx-auto text-center rounded-xl shadow-lg py-10 px-8 text-sm font-light">
            <img
              src={kalpna}
              alt=""
              className="rounded-full w-[180px] mx-auto  h-[180px]"
            />
            <h2 className="text-center text-[25px] mt-3 mb-3 font-medium">
              Kalpana Chawla
            </h2>
            <p className="text-justify">
              Kalpana Chawla was an Indian-born American astronaut and aerospace
              engineer who became the first was woman of Indian origin to in fly
              to space.23 She first flew on Space Shuttle Columbia in 1997 as
              well mission specialist and primary
            </p>
            <button className="uppercase px-6 py-2 rounded-lg font-normal bg-[#700E0E] hover:bg-[#0F5E61] text-white mt-5 ">
              Get More
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
