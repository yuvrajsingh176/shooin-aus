import { Carousel } from "react-responsive-carousel";

const Giveaways = () => {
  return (
    <div
      id="giveaway"
      className="giveaways flex md:flex-row flex-col mt-10 border-[#379683] border-2 rounded-xl p-4"
    >
      <div className="flex flex-col justify-center text-[#FFC700] md:w-2/5">
        <p className="text-4xl font-bold items-center  text-center pb-10">
          MAJOR GIVEAWAYS
        </p>
        <p className="font-semibold text-lg pb-10">
          Experience almost a million dollars in major giveaways lined up in the
          coming months!
        </p>
        <p className="text-lg pb-5">
          Start your Winners Locker membership at only $4.75 a week to enjoy
          automatic entry to all giveaways and earn bonus entries and other
          exclusive perk available through the Winners Locker app.
        </p>
        <button className="mr-8 hover:text-[#05386b] font-bold bg-[#05386b] hover:bg-[#edf5e1] text-[#FFC700] p-4 rounded-xl border-[#05386b] border-[2px]">
          JOIN NOW
        </button>
      </div>
      <div className="carousel relative md:w-3/5 my-12 md:my-0">
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
  );
};
export default Giveaways;
