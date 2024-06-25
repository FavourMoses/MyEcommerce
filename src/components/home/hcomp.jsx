import "./home.css";
import { IoIosSearch } from "react-icons/io";
const Scomp = () => {
  return (
    <div className="scontain">
        <p className="spara">
          The best place to buy your house, sell your car or find a job in
          Nigeria
        </p>
        <input placeholder="search" className="sinput" />{" "}
        <IoIosSearch className="search" />
        <button className="searchBtn">Search</button>
      </div>
    // </div>
  );
};

export default Scomp;
