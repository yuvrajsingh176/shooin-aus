const Footer = () => {
  return (
    <div className="bg-black w-full py-10 px-6 md:p-20 text-sm ">
      <div className="bg-white h-4px hidden md:block"></div>

      <div className="text-white flex w-full    md:justify-around justify-between cursor-pointer">
        <p className="text-xs">© 2024 ALL RIGHTS RESERVED</p>
        <p className="mr-2 text-xs">TERMS & CONDITIONS</p>
        <p className="text-xs">FREQUENTLY ASKED QUESTIONS</p>
        <p className="text-xs"> PRIVACY POLICY</p>
      </div>
    </div>
  );
};
export default Footer;
