import "./nav1.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuFileSearch } from "react-icons/lu";
import { FaCar, FaIdCardAlt, FaRegHeart } from "react-icons/fa";
import { FaBuildingColumns, FaRocketchat } from "react-icons/fa6";
import { BiSpreadsheet } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePhoneIphone, MdWorkHistory } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { PiBuildingsThin } from "react-icons/pi";
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
        <a href="/motor">
          <FaCar className="na_icons" />
          <p>Motors</p>
        </a>
        <a href="">
          <HiOutlineBuildingOffice2 className="na_icons" />
          <p>Property for Rent</p>
        </a>
        <a href="">
          <FaBuildingColumns className="na_icons" />
          <p>Property for Sale</p>
        </a>
        <a href="">
          <FaIdCardAlt className="na_icons" />
          <p>Jobs</p>
        </a>
        <a href="">
          <MdWorkHistory className="na_icons" />
          <p>Classifieds</p>
        </a>
        <a href="/furniture-garden">
          <PiBuildingsThin className="na_icons" />
          <p>Furniture and garden</p>
        </a>
        <a href="/phone">
          <MdOutlinePhoneIphone className="na_icons" />
          <p>Mobiles and Tablets</p>
        </a>
        <a href="/community">
          <TbUsers className="na_icons" />
          <p>Community</p>
        </a>
      </div>
    </div>
  );
};

export default Nav;