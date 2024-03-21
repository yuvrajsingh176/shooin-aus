import Card from "./Card"

const Pastwin = () => {
    const textStyle = {
        fontFamily: "Zeyada, cursive",
        fontSize: "60px",
        fontWeight: "bold",
        color: "#edf5e1",
      };
    return (
        <div id="pastwin" className="past-winners flex flex-col mt-10 border-[#379683] border-2 rounded-xl p-4">
        <strong
          style={textStyle}
          className="md:flex hidden   text-[#FFC700] items-center text-center justify-center w-full  mt-20"
        >
          <span className="md:mr-6 text-[#FFC700]">PAST</span>{" "}
          <span className="md:mr-6 text-[#FFC700]">W</span>
          <span className="md:mr-6 text-[#FFC700]">I</span>
          <span className="md:mr-6 text-[#FFC700]">N</span>
          <span className="md:mr-6 text-[#FFC700]">N</span>
          <span className="md:mr-6 text-[#FFC700]">E</span>
          <span className="md:mr-6 text-[#FFC700]">R</span>
          <span className="md:mr-6 text-[#FFC700]">S</span>
        </strong>

        <p className="flex items-center md:hidden justify-center text-4xl my-6 text-[#FFC700] font-bold">
          Past Winners
        </p>

        <div className="md:flex hidden flex-wrap">
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

        <div className="md:hidden flex flex-wrap">
          <div className=" my-4">
            {" "}
            {/* Each card takes 1/4th of the width */}
            <Card />
          </div>
          <div className=" my-4">
            {" "}
            {/* Each card takes 1/4th of the width */}
            <Card />
          </div>
          <div className=" my-4">
            {" "}
            {/* Each card takes 1/4th of the width */}
            <Card />
          </div>
          <div className=" my-4">
            {" "}
            {/* Each card takes 1/4th of the width */}
            <Card />
          </div>
          <div className=" my-4">
            {" "}
            {/* Each card takes 1/4th of the width */}
            <Card />
          </div>
          <div className=" my-4">
            {" "}
            {/* Each card takes 1/4th of the width */}
            <Card />
          </div>
          <div className=" my-4">
            {" "}
            {/* Each card takes 1/4th of the width */}
            <Card />
          </div>
        </div>
      </div>
    )
}
export default Pastwin;