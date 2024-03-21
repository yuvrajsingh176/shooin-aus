import Weekcard from "./Weekcard"

const Winweek = () => {
    return (
        <div id="winweek" className="win-weekly flex flex-col mt-10 border-[#379683] border-2 rounded-xl p-4">
        <p className="text-[#FFC700] font-bold text-5xl flex justify-center">
          WIN WEEKLY
        </p>

        <div className="cards flex md:flex-row flex-col justify-around mt-10">
          <Weekcard />
          <Weekcard />
        </div>
      </div>
    )
}
export default Winweek;