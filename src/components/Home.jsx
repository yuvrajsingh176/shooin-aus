import Navbar from "./Navbar";
import icon1 from "../assets/icons8-win-sports.svg";
import icon2 from "../assets/5239033.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
const Home = () => {
  const textStyle = {
    fontFamily: "Zeyada, cursive",
    fontSize: "60px",
    fontWeight: "bold",
    color: "#edf5e1",
  };
  return (
    <>
      <Navbar />

      <div className="mt-32">
        <div className="">
          <div className="flex justify-around ">
            <img className="h-[500px]" src={icon1}></img>
            <img className="h-[500px]  rounded-lg" src={icon2}></img>
          </div>
          <div>
            <p className="text-[#05386b] ml-6 my-10 font-medium text-2xl">
              Join Winners Locker today and gear up for an extraordinary journey
              <br></br>
              of sports wins, car giveaways, epic holidays, and exclusive perks.
            </p>
            <div className="flex ml-6">
              <button className="mr-8 text-[#05386b] font-bold hover:bg-[#05386b] hover:text-[#edf5e1] p-4 rounded-xl border-[#05386b] border-[2px]">
                Browse Collection
              </button>
              <button className="text-[#05386b] font-bold border-[#05386b] border-[2px] p-4 rounded-xl hover:bg-[#05386b] hover:text-[#edf5e1]">
                Sign Up
              </button>
            </div>
          </div>
          <div className="bg-[#05386b] mt-8 p-4 text-white flex justify-around rounded-xl">
            <div className="flex flex-col items-center  justify-center text-center h-auto text-[#edf5e1] font-medium text-lg">
              <p>PROUDLY SUPPORTING</p>
              <p>
                We are proud partners with LIVIN and Save The Children<br></br>
                charities, dedicated to making a positive impact on mental
                <br></br>
                health and the well-being of children in need
              </p>
            </div>
            <div className="flex w-fit ">
              <img
                className="w-fit rounded-xl mr-2"
                src="https://winnerslocker.com.au/wp-content/uploads/2023/11/img-1.png"
              ></img>
              <img
                className="w-fit rounded-xl"
                src="https://winnerslocker.com.au/wp-content/uploads/2023/11/img-2.png"
              ></img>
            </div>
          </div>
          <div className="giveaways flex mt-10 border-[#379683] border-2 rounded-xl p-4">
            <div className="flex flex-col justify-center text-[#05386b] w-2/5">
              <p className="text-4xl font-bold items-center  text-center pb-10">
                MAJOR GIVEAWAYS
              </p>
              <p className="font-semibold text-lg pb-10">
                Experience almost a million dollars in major giveaways lined up
                in the coming months!
              </p>
              <p className="text-lg pb-5">
                Start your Winners Locker membership at only $4.75 a week to
                enjoy automatic entry to all giveaways and earn bonus entries
                and other exclusive perk available through the Winners Locker
                app.
              </p>
              <button className="mr-8 text-[#05386b] font-bold hover:bg-[#05386b] hover:text-[#edf5e1] p-4 rounded-xl border-[#05386b] border-[2px]">
                JOIN NOW
              </button>
            </div>
            <div className="carousel w-3/5">
              <Carousel>
                <div>
                  <img
                    className="rounded-xl"
                    src="https://winnerslocker.com.au/wp-content/uploads/2023/12/Winners-Locker-New-Hilix-LIV-Golf-Giveaway-Banner.jpg"
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="https://winnerslocker.com.au/wp-content/uploads/2023/12/Winners-Locker-Hilux-GR-Sport-Darwin-Supercars-Giveaway-Banner.jpg"
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="https://winnerslocker.com.au/wp-content/uploads/2024/03/Winners-Locker-Major-50k-Cash-Giveaway-Banner.jpg"
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="https://winnerslocker.com.au/wp-content/uploads/2024/03/Winners-Locker-Major-50k-Cash-Giveaway-Banner.jpg"
                  />
                </div>
                <div>
                  <img
                    className="rounded-xl"
                    src="https://winnerslocker.com.au/wp-content/uploads/2023/12/Winners-Locker-Hilux-GR-Sport-Darwin-Supercars-Giveaway-Banner.jpg"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="past-winners flex flex-col mt-10 border-[#379683] border-2 rounded-xl p-4">
            <img
              className="absolute right-[735px]  h-[200px]"
              src="https://winnerslocker.com.au/wp-content/uploads/2023/12/image-27.png"
              alt=""
            ></img>
            <strong
              style={textStyle}
              className="flex items-center text-center justify-center w-full mt-20"
            >
              <span className="mr-6">PAST</span> <span className="mr-8">W</span>
              <span className="mr-6">N</span>
              <span className="mr-6">N</span>
              <span className="mr-6">E</span>
              <span className="mr-6">R</span>
              <span className="mr-6">S</span>
            </strong>
            <div className="flex flex-wrap">
              <div className="w-1/4 p-4">
                {" "}
                {/* Each card takes 1/4th of the width */}
                <Card />
              </div>
              <div className="w-1/4 p-4">
                <Card />
              </div>
              <div className="w-1/4 p-4">
                <Card />
              </div>
              <div className="w-1/4 p-4">
                <Card />
              </div>
              <div className="w-1/4 p-4">
                <Card />
              </div>
              <div className="w-1/4 p-4">
                <Card />
              </div>
              <div className="w-1/4 p-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
