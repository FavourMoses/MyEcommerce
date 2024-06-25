import "./nav1.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuFileSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { BiSpreadsheet } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="ncontainer">
      <div className="nparent">
        <div className="np1">
          <p className="nboss">Soft</p>
          <select id="myDropdown">
            <option value="">
              <a href="/home">All cities(Nigeria)</a>
            </option>
            <option value="option1">Abuja</option>
            <option value="option2">Lagos</option>
            <option value="option3">Port harcourt</option>
            <option value="option4">Edo</option>
            <option value="option5">Delta</option>
            <option value="option6">Akwa Ibom</option>
          </select>
        </div>
        <div className="nav1">
          <div>
            <IoIosNotificationsOutline className="navicons" />
            <p className="iconName">Notification</p>
          </div>
          <div>
            <LuFileSearch className="navicons" />
            <p className="iconName">My Searches</p>
          </div>
          <div>
            <FaRegHeart className="navicons" />
            <p className="iconName">Favourites</p>
          </div>
          <div>
            <FaRocketchat className="navicons" />
            <p className="iconName">Chats</p>
          </div>
          <div>
            <BiSpreadsheet className="navicons" />
            <p className="iconName">My Ads</p>
          </div>
          <button className="login">Log in or Sign up</button>
          <button className="place">Place Your Ad</button>
        </div>
      </div>
      <div className="snav2">
        <a href="/motor">Motors</a>
        <a href="">Property for Rent</a>
        <a href="">Property for Sale</a>
        <a href="">Jobs</a>
        <a href="">Classifieds</a>
        <a href="/furniture-garden">Furniture and garden</a>
        <a href="/phone">Mobiles and Tablets</a>
        <a href="/community">Community</a>
      </div>
    </div>
  );
};

export default Nav;