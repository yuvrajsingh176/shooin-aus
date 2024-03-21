import Navbar from "./Navbar";
import icon1 from "../assets/icons8-win-sports.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./Button.css";
import Footer from "./Footer";
import Giveaways from "./Giveaways";
import Pastwin from "./Pastwin";
import Winweek from "./Winweek";
import { Plans } from "./Plans";
const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />

      <div className=" p-[24px] ">
        <div className="md:mt-24 w-full">
          <div className="flex md:flex-row flex-col h-1/2 justify-around ">
            <img className="h-[500px]" src={icon1}></img>
            <img
              className="h-[400px] md:w-1/2 md:object-cover md:mt-16  rounded-lg"
              src="https://www.sweepsadvantage.com/sweepstakes-contests-blog/wp-content/uploads/2018/01/1_Win-Prizes.jpg"
            ></img>
          </div>
          <div>
            <p className="text-[#FFC700] ml-6 my-10 font-medium text-2xl">
              Join Winners Locker today and gear up for an extraordinary journey
              <br></br>
              of sports wins, car giveaways, epic holidays, and exclusive perks.
            </p>
            <div className="flex ml-6">
              <button className="mr-8 shadow-xl hover:text-[#05386b] font-bold bg-[#05386b] hover:bg-[#edf5e1] text-[#FFC700] p-4 rounded-xl border-[#05386b] border-[2px]">
                Browse Collection
              </button>
              <button className="mr-8 hover:text-[#05386b] font-bold bg-[#05386b] hover:bg-[#edf5e1] text-[#FFC700] p-4 rounded-xl border-[#05386b] border-[2px]">
                Sign Up
              </button>
            </div>
          </div>
          <div className="bg-[#05386b] mt-8 p-8 text-white flex  md:flex-row flex-col rounded-xl shadow-xl">
            <div className="flex flex-col items-center  justify-center text-center h-auto text-[#FFC700] font-medium text-lg">
              <p className="font-bold my-4 text-3xl">PROUDLY SUPPORTING</p>
              <p>
                We are proud partners with LIVIN and Save The Children<br></br>
                charities, dedicated to making a positive impact on mental
                <br></br>
                health and the well-being of children in need
              </p>
            </div>
            <div className="flex md:flex-row flex-col  justify-around ">
              <img
                className="md:w-1/4 object-contain rounded-xl my-4 md:my-0 mr-2"
                src="https://winnerslocker.com.au/wp-content/uploads/2023/11/img-1.png"
              ></img>
              <img
                className="md:w-1/4 object-contain my-4 rounded-xl md:my-0"
                src="https://winnerslocker.com.au/wp-content/uploads/2023/11/img-2.png"
              ></img>
            </div>
          </div>
          <Giveaways />

          <Pastwin />
          <Winweek />

          <Plans />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
