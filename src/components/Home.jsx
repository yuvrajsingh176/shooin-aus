import Navbar from "./Navbar";
import icon1 from "../assets/icons8-win-sports.svg";
import icon2 from "../assets/5239033.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import Weekcard from "./Weekcard";
import PlanPoints from "./PlanPoints";
import "./Button.css";
import Footer from "./Footer";

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

      <div className=" p-[24px] ">
        <div className="mt-24">
          <div className="flex h-1/2 justify-around ">
            <img className="h-[500px]" src={icon1}></img>
            <img
              className="h-[400px] w-1/2 object-cover mt-16  rounded-lg"
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
          <div className="bg-[#05386b] mt-8 p-8 text-white flex  rounded-xl shadow-xl">
            <div className="flex flex-col items-center  justify-center text-center h-auto text-[#FFC700] font-medium text-lg">
              <p>PROUDLY SUPPORTING</p>
              <p>
                We are proud partners with LIVIN and Save The Children<br></br>
                charities, dedicated to making a positive impact on mental
                <br></br>
                health and the well-being of children in need
              </p>
            </div>
            <div className="flex justify-around ">
              <img
                className="w-1/4 object-contain rounded-xl mr-2"
                src="https://winnerslocker.com.au/wp-content/uploads/2023/11/img-1.png"
              ></img>
              <img
                className="w-1/4 object-contain rounded-xl"
                src="https://winnerslocker.com.au/wp-content/uploads/2023/11/img-2.png"
              ></img>
            </div>
          </div>
          <div className="giveaways flex mt-10 border-[#379683] border-2 rounded-xl p-4">
            <div className="flex flex-col justify-center text-[#FFC700] w-2/5">
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
              <button className="mr-8 hover:text-[#05386b] font-bold bg-[#05386b] hover:bg-[#edf5e1] text-[#FFC700] p-4 rounded-xl border-[#05386b] border-[2px]">
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
            <strong
              style={textStyle}
              className="flex text-[#FFC700] items-center text-center justify-center w-full mt-20"
            >
              <span className="mr-6 text-[#FFC700]">PAST</span>{" "}
              <span className="mr-6 text-[#FFC700]">W</span>
              <span className="mr-6 text-[#FFC700]">I</span>
              <span className="mr-6 text-[#FFC700]">N</span>
              <span className="mr-6 text-[#FFC700]">N</span>
              <span className="mr-6 text-[#FFC700]">E</span>
              <span className="mr-6 text-[#FFC700]">R</span>
              <span className="mr-6 text-[#FFC700]">S</span>
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
              <div className="w-1/4 p-4">
                <Card />
              </div>
            </div>
          </div>

          <div className="win-weekly flex flex-col mt-10 border-[#379683] border-2 rounded-xl p-4">
            <p className="text-[#FFC700] font-bold text-5xl flex justify-center">
              WIN WEEKLY
            </p>

            <div className="cards flex justify-around mt-10">
              <Weekcard />
              <Weekcard />
            </div>
          </div>

          <div className="plans flex flex-col mt-10 border-[#379683] border-2 rounded-xl p-4">
            <p className="text-[#FFC700] font-bold text-5xl flex justify-center">
              CHOOSE YOUR PLAN
            </p>
            <p className="text-[#FFC700] font-semibold text-2xl flex justify-center">
              Become a member to go in the draw for every giveaway automatically
            </p>

            <div className="signup-cards flex flex-col  mt-6 items-center justify-center">
              <div className="flex-grow p-4 mb-2 card rounded-2xl w-3/4 ">
                <div className="bg-[#c4bdbf] rounded-lg flex border-b items-center justify-center border-black">
                  <img
                    className="rounded-lg"
                    src="https://winnerslocker.com.au/wp-content/uploads/2023/12/whistle-icon.png"
                  ></img>

                  <p className="text-black  text-5xl font-semibold">STARTER</p>
                </div>
                <div className="content p-4 bg-[#05386b] text-[#FFF455] rounded-lg">
                  <div className="flex flex-col items-center justify-center">
                    <p className="my-2 text-lg font-semibold">ACCUMULATING</p>
                    <p className="mb-2 text-3xl font-bold">2 Entries / Month</p>
                    <p className="text-xl font-semibold">
                      INTO EVERY SINGLE DRAW
                    </p>
                    <div className="bg-black h-[2px] px-4 w-full my-2"></div>
                  </div>
                  <PlanPoints />

                  <div className="flex flex-col items-center w-full ">
                    <strong className="text-4xl">$19</strong>
                    <p>PER MONTH</p>
                    <button
                      className="button-86 text-3xl w-1/2 my-2 p-4"
                      role="button"
                    >
                      Sign UP
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-grow  p-4 mb-2 card w-3/4 rounded-2xl">
                <div className="bg-[#c4bdbf] rounded-lg flex border-b items-center justify-center border-black">
                  <img
                    className="rounded-lg"
                    src="https://winnerslocker.com.au/wp-content/uploads/2023/12/whistle-icon.png"
                  ></img>

                  <p className="text-black  text-5xl font-semibold">PRO</p>
                </div>
                <div className="content p-4 bg-[#05386b] text-[#FFF455]  rounded-lg">
                  <div className="flex flex-col items-center justify-center">
                    <p className="my-2 text-lg font-semibold">ACCUMULATING</p>
                    <p className="mb-2 text-3xl font-bold">2 Entries / Month</p>
                    <p className="text-xl font-semibold">
                      INTO EVERY SINGLE DRAW
                    </p>
                    <div className="bg-black h-[2px] px-4 w-full my-2"></div>
                  </div>
                  <PlanPoints />
                  <div className="flex flex-col items-center w-full ">
                    <strong className="text-4xl">$19</strong>
                    <p>PER MONTH</p>
                    <button
                      className="button-86 text-3xl w-1/2 my-2 p-4"
                      role="button"
                    >
                      Sign UP
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-3/4  card rounded-2xl">
                <div className="bg-[#c4bdbf] flex rounded-lg border-b items-center justify-center border-black">
                  <img
                    className="rounded-lg"
                    src="https://winnerslocker.com.au/wp-content/uploads/2023/12/whistle-icon.png"
                  ></img>

                  <p className="text-black  text-5xl font-semibold">MVP</p>
                </div>
                <div className="content p-4  rounded-lg bg-[#05386b] text-[#FFF455]">
                  <div className="flex flex-col items-center justify-center">
                    <p className="my-2 text-lg font-semibold">ACCUMULATING</p>
                    <p className="mb-2 text-3xl font-bold">2 Entries / Month</p>
                    <p className="text-xl font-semibold">
                      INTO EVERY SINGLE DRAW
                    </p>
                    <div className="bg-black h-[2px] px-4 w-full my-2"></div>
                  </div>
                  <PlanPoints />
                  <div className="flex flex-col items-center w-full ">
                    <strong className="text-4xl">$19</strong>
                    <p>PER MONTH</p>
                    <button
                      className="button-86 text-3xl w-1/2 my-2 p-4"
                      role="button"
                    >
                      Sign UP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center pt-6">
              <img src="https://winnerslocker.com.au/wp-content/uploads/2023/12/Winners-Locker-Checkout-Secure-Badge.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
