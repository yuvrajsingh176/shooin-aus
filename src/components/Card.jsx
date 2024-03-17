const Card = () => {
  return (
    <div>
      <div className="img-box">
        <img
          className="rounded-xl"
          src="https://winnerslocker.com.au/wp-content/uploads/2023/09/Winners-Locker-Winner-Christian-G.jpg"
        ></img>
      </div>
      <div className="text-box text-[#05386b] font-bold text-lg">
        <span className="drawn">Drawn</span>
        <div className="inner-text">
          <h3>New Jetski & Ultimate Grand Final Experience worth $34k</h3>
          <p>WINNER: Christian G from Vic</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
