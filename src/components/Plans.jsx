import PlanPoints from "./PlanPoints";

export const Plans = () => {
  return (
    <div
      id="plan"
      className="plans flex flex-col mt-10 border-[#379683] border-2 rounded-xl p-4"
    >
      <p className="text-[#FFC700] font-bold md:text-5xl text-3xl  flex justify-center">
        CHOOSE YOUR PLAN
      </p>
      <p className="text-[#FFC700] font-semibold md:text-2xl my-4 md:my-1 md:xl flex justify-center">
        Become a member to go in the draw for every giveaway automatically
      </p>

      <div className="signup-cards flex flex-col  mt-6 items-center justify-center">
        <div className="flex-grow my-4  md:my-8 mb-2 card rounded-2xl md:w-3/4 ">
          <div className="bg-[#c4bdbf] p-4 md:p-0 rounded-lg flex border-b items-center justify-center border-black">
            <img
              className="rounded-lg w-1/2 md:full"
              src="https://winnerslocker.com.au/wp-content/uploads/2023/12/whistle-icon.png"
            ></img>

            <p className="text-black  md:text-5xl text-2xl font-bold  md:font-semibold">
              STARTER
            </p>
          </div>
          <div className="content p-4 bg-[#05386b] text-[#FFF455] rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <p className="my-2 text-lg font-semibold">ACCUMULATING</p>
              <p className="mb-2 text-3xl font-bold">2 Entries / Month</p>
              <p className="text-xl font-semibold">INTO EVERY SINGLE DRAW</p>
              <div className="bg-black h-[2px] px-4 w-full my-2"></div>
            </div>
            <PlanPoints />

            <div className="flex flex-col items-center w-full ">
              <strong className="text-4xl mt-6 md:mt-0">$19</strong>
              <p>PER MONTH</p>
              <button
                className="button-86 text-3xl w-1/2 md:my-2 my-6 p-4"
                role="button"
              >
                Sign UP
              </button>
            </div>
          </div>
        </div>
        <div className="flex-grow my-4 md:my-8  mb-2 card md:w-3/4 rounded-2xl">
          <div className="bg-[#c4bdbf] p-4 md:p-0 rounded-lg flex border-b items-center justify-center border-black">
            <img
              className="rounded-lg w-1/2 md:full"
              src="https://winnerslocker.com.au/wp-content/uploads/2023/12/whistle-icon.png"
            ></img>

            <p className="text-black  md:text-5xl text-2xl font-bold  md:font-semibold">
              PRO
            </p>
          </div>
          <div className="content bg-[#05386b] p-2 text-[#FFF455]  rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <p className="my-2 text-lg font-semibold">ACCUMULATING</p>
              <p className="mb-2 text-3xl font-bold">2 Entries / Month</p>
              <p className="text-xl font-semibold">INTO EVERY SINGLE DRAW</p>
              <div className="bg-black h-[2px] px-4 w-full my-2"></div>
            </div>
            <PlanPoints />
            <div className="flex flex-col items-center w-full ">
              <strong className="text-4xl mt-6 md:mt-0">$19</strong>
              <p>PER MONTH</p>
              <button
                className="button-86 text-3xl w-1/2 md:my-2 my-6 p-4"
                role="button"
              >
                Sign UP
              </button>
            </div>
          </div>
        </div>
        <div className=" md:w-3/4 my-4 md:my-8 card rounded-2xl">
          <div className="bg-[#c4bdbf] p-4 md:p-0 rounded-lg flex border-b items-center justify-center border-black">
            <img
              className="rounded-lg w-1/2 md:full"
              src="https://winnerslocker.com.au/wp-content/uploads/2023/12/whistle-icon.png"
            ></img>

            <p className="text-black  md:text-5xl text-2xl font-bold  md:font-semibold">
              MVP
            </p>
          </div>
          <div className="content p-4  rounded-lg bg-[#05386b] text-[#FFF455]">
            <div className="flex flex-col items-center justify-center">
              <p className="my-2 text-lg font-semibold">ACCUMULATING</p>
              <p className="mb-2 text-3xl font-bold">2 Entries / Month</p>
              <p className="text-xl font-semibold">INTO EVERY SINGLE DRAW</p>
              <div className="bg-black h-[2px] px-4 w-full my-2"></div>
            </div>
            <PlanPoints />
            <div className="flex flex-col items-center w-full ">
              <strong className="text-4xl mt-6 md:mt-0">$19</strong>
              <p>PER MONTH</p>
              <button
                className="button-86 text-3xl w-1/2 md:my-2 my-6 p-4"
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
  );
};
