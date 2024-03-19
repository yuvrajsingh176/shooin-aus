import { FaStar } from "react-icons/fa6";

const PlanPoints = () => {
  return (
    <div >
      <ul className="text-xl">
        <li className="flex items-center ">
          <div className="mr-2">
            <FaStar />
          </div>
          <p>
            <strong>2 ACCUMULATING </strong> monthly entries for more chances of
            win.
          </p>
        </li>
        <li className="flex items-center ">
          <div className="mr-2">
            <FaStar />
          </div>
          <p>
            <strong>500</strong> monthly reward points to unblock exclusive
            benefits.
          </p>
        </li>
        <li className="flex items-center ">
          <div className="mr-2">
            <FaStar />
          </div>
          <p>
            Automatic entry to <strong>all giveaways.</strong>
          </p>
        </li>
        <li className="flex items-center ">
          <div className="mr-2">
            <FaStar />
          </div>
          <p>
            Access <strong>Big</strong> discounts.
          </p>
        </li>
      </ul>
    </div>
  );
};
export default PlanPoints;
