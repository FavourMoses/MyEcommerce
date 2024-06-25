import "./secland.css";
import { FaArrowRight } from "react-icons/fa6";
const Scomp2 = ({
  headsc2,
  iconsc2,
  cars,
  motorcycles,
  accesories,
  vehicles,
  motors,
}) => {
  return (
    <div className="scomp2">
      <div className="scompdiv">
        <div className="scompicon">
          <div className="scompIc">{iconsc2}</div>
          <p className="scomphd">{headsc2}</p>
        </div>
        <ul className="scomp2list">
          <li>
            <a href="">{cars}</a>
          </li>
          <li>
            <a href="">{motorcycles}</a>
          </li>
          <li>
            <a href="">{accesories}</a>
          </li>
          <li>
            <a href="">{vehicles}</a>
          </li>
        </ul>
        <a className="last" href="">
          All in {motors} <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Scomp2;
