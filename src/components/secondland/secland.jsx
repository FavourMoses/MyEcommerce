import { useState } from "react";
import Nav from "../nav1/nav1";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import "./secland.css"



import { FaArrowRight, FaCar } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaIdCardAlt } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { PiBuildingsThin } from "react-icons/pi";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { LuArmchair } from "react-icons/lu";
import { MdOutlinePhoneIphone } from "react-icons/md";
import checksecond from "../../assets/checksecond.png";
import Scomp3 from "./scomp3";
import residential1 from "../../assets/residential1.png";
import residential2 from "../../assets/residential2.png";
import residential3 from "../../assets/residential3.png";
import residential4 from "../../assets/residential4.png";
import residential5 from "../../assets/residential5.png";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import furniture1 from "../../assets/furniture1.png";
import furniture2 from "../../assets/furniture2.png";
import furniture3 from "../../assets/furniture3.png";
import furniture4 from "../../assets/furniture4.png";
import furniture5 from "../../assets/furniture5.png";
import nresident1 from "../../assets/nresident1.png";
import nresident2 from "../../assets/nresident2.png";
import nresident3 from "../../assets/nresident3.png";
import nresident4 from "../../assets/nresident4.png";
import nresident5 from "../../assets/nresident5.png";
import Computer1 from "../../assets/Computer1.png";
import Computer2 from "../../assets/Computer2.png";
import Computer3 from "../../assets/Computer3.png";
import Computer4 from "../../assets/Computer4.png";
import Computer5 from "../../assets/Computer5.png";
import phone1 from "../../assets/phone1.png";
import phone2 from "../../assets/phone2.png";
import phone3 from "../../assets/phone3.png";
import phone4 from "../../assets/phone4.png";
import phone5 from "../../assets/phone5.png";
import room1 from "../../assets/room1.png";
import room2 from "../../assets/room2.png";
import room3 from "../../assets/room3.png";
import room4 from "../../assets/room4.png";
import room5 from "../../assets/room5.png";
import exercise1 from "../../assets/exercise1.png";
import exercise2 from "../../assets/exercise2.png";
import exercise3 from "../../assets/exercise3.png";
import exercise4 from "../../assets/exercise4.png";
import exercise5 from "../../assets/exercise5.png";
import Scomp2 from "./scomp2";
import Footer1 from "../footer/footer1";
import Footlong from "../footer/footl2";
import Foot from "../footer/footer";

const Secland = () => {
  // State to manage loader visibility
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Use useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = () => {
    // Show loader
    setLoading(true);

    // Simulate loading with a 1-second timer before navigating
    setTimeout(() => {
      navigate(`/${path}`);
      // Hide loader after navigation is completed
      setLoading(false);
    }, 1000); // 1-second delay
  };

  const suggestions = ["motors", "mobiles-tablets"];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPath(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setPath(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div>
      <Nav />
      <div className="mdivContainer">
        <div className="bg-div2">
          <p className="p-bg">The leading marketplace to buy and sell cars</p>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="Enter Text"
              value={path}
              onChange={handleInputChange}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Delay to allow click
              onFocus={() => setShowSuggestions(path.length > 0)}
              className="inputPath"
            />
            {showSuggestions && (
              <div className="suggestionsDropdown">
                {suggestions
                  .filter((suggestion) =>
                    suggestion.toLowerCase().includes(path.toLowerCase())
                  )
                  .map((suggestion) => (
                    <div
                      key={suggestion}
                      className="suggestion"
                      onMouseDown={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <button
            onClick={handleNavigation}
            className="navigateButton"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Search"
            )}
          </button>
        </div>
      </div>
      <div className="margin">
        <p className="popular">Popular categories</p>
        <div className="parentscomp2">
          <Scomp2
            iconsc2={<FaCar />}
            headsc2="Motors"
            cars="Cars"
            motorcycles="Motorcycles"
            accesories="Auto accessories & Parts"
            motors="Motors"
            vehicles="Heavy Vehicles"
          />
          <Scomp2
            iconsc2={<HiOutlineBuildingOffice2 />}
            headsc2="Property for Rent"
            cars="Residential unit for rent"
            motorcycles="Commercial"
            accesories="Rooms for rent(flatmates)"
            motors="Property for Rent  "
            vehicles="Short term (monthly)"
          />
          <Scomp2
            iconsc2={<FaBuildingColumns />}
            headsc2="Property for sale"
            cars="Residential for sale"
            motorcycles="Commercial"
            accesories="Land"
            motors="Property for sale"
            vehicles="Multiple Units"
          />
          <Scomp2
            iconsc2={<FaIdCardAlt />}
            headsc2="Classifieds"
            cars="Electronics"
            motorcycles="Computers and Networking"
            accesories="Clothing and Accessories"
            motors="Classifieds"
            vehicles="Jewelry & Watches"
          />
          <Scomp2
            iconsc2={<MdWorkHistory />}
            headsc2="Jobs"
            cars="Accounting/Finance"
            motorcycles="Engineering"
            accesories="Sales / Business Development"
            motors="Jobs"
            vehicles="Secretarial / Front office"
          />
        </div>

        <div className="parentscomp3">
          <Scomp2
            iconsc2={<TbUsers />}
            headsc2="Community"
            cars="Freelancers"
            motorcycles="Home maintenance"
            accesories="Other Services"
            motors="Community"
            vehicles="Tutors & Classes"
          />
          <Scomp2
            iconsc2={<PiBuildingsThin />}
            headsc2="Business & Industrial"
            cars="Businesses for sale"
            motorcycles="Construction"
            accesories="Food &beverage"
            motors="Business & Industrial"
            vehicles="Industrial Supplies"
          />
          <Scomp2
            iconsc2={<CgSmartHomeWashMachine />}
            headsc2="Home Appliances"
            cars="Large Appliances / White Goods"
            motorcycles="Small Kitchen Appliances"
            accesories="Outdoor Appliances"
            motors="Home Appliances"
            vehicles="Small Bathroom Appliances"
          />
          <Scomp2
            iconsc2={<LuArmchair />}
            headsc2="Furniture, Home & Garden"
            cars="Furniture"
            motorcycles="Home Accessories"
            accesories="Garden & Outdoor"
            motors="Furniture, Home & Garden"
            vehicles="Lighting & Fans"
          />
          <Scomp2
            iconsc2={<MdOutlinePhoneIphone />}
            headsc2="Mobile phones & Tablets"
            cars="Mobile Phones"
            motorcycles="Mobile Phones & Tablet Accessories"
            accesories="Tablets"
            motors="Mobile Phones & Tablets"
            vehicles="Other Mobile Phones & Tablets"
          />
        </div>
        <div className="scheck">
          <div className="scheck2">
            <img className="check_img" src={checksecond} alt="check" />
            <div className="verified">
              <h4>Got a verified batch yet? </h4>
              <p>Get more visibility | Enhance your credibility</p>
            </div>
          </div>
          <button className="getstarted">Get started</button>

          <FaArrowRight className="start_arrow" />
        </div>

        <p className="popular_1">Popular in Residential for Rent</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={residential1}
              amount="N1000,000"
              type="3Beds .2Baths"
              address="Address harbor point Abuja"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={residential2}
              amount="N1000,000"
              type="3Beds .2Baths"
              address="Address harbor point Abuja"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={residential3}
              amount="N1000,000"
              type="3Beds .2Baths"
              address="Address harbor point Abuja"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={residential4}
              amount="N1000,000"
              type="3Beds .2Baths"
              address="Address harbor point Abuja"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={residential5}
              amount="N1000,000"
              type="3Beds .2Baths"
              address="Address harbor point Abuja"
              link=""
            />
          </div>
        </div>

        <p className="popular_1">Popular in cars</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={car1}
              amount="N1000,000"
              type="Hummer"
              address="2008 . 103,254km"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={car2}
              amount="N1000,000"
              type="Hummer"
              address="2010 . 121,234km"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={car3}
              amount="N1000,000"
              type="Toyota Prado"
              address="2019 . 317,21km"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={car4}
              amount="N1000,000"
              type="Toyota prado"
              address="2011 . 71,211km"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={car5}
              amount="N1000,000"
              type="Toyota hilux"
              address="2018 . 27000km"
              link=""
            />
          </div>
        </div>

        <p className="popular_1">Popular in Furniture and Garden</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={furniture1}
              amount="N1000,000"
              type="The one keystone U shape sofa"
              address="The Meadows 1"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={furniture2}
              amount="N1500,000"
              type="Bed Frame and Maitress"
              address="AI Manara"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={furniture3}
              amount="N500,000"
              type="High Quality pinca feather"
              address="Jumeirah lake towers(JLT)"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={furniture4}
              amount="N300,000"
              type="The one keystone U shape sofa"
              address="The Meadows 1"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={furniture5}
              amount="N0500,000"
              type="IKEA sofa"
              address="Remraam"
              link=""
            />
          </div>
        </div>

        <p className="popular_1">Popular in Residential for Sale</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={nresident1}
              amount="N25,000,000"
              type="1Bed . 1Bath"
              address="Park Height 1, Maitama"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={nresident2}
              amount="N30,000,000"
              type="1Bed . 1Bath"
              address=" Hill Estate, Kubwa"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={nresident3}
              amount="N5,000,000"
              type="Studio . 1Bath"
              address="Azizi Residence, Jahi"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={nresident4}
              amount="N50,000,000"
              type="3Bed . 4Bath"
              address="Liv Estate, Maitama"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={nresident5}
              amount="N25,000,000"
              type="2Bed . 2Bath"
              address="Park Height 1, Jabi"
              link=""
            />
          </div>
        </div>

        <p className="popular_1">Popular in Computers and Networking</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={Computer1}
              amount="N400,000"
              type="MI range Extender"
              address="AI Barsha1"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={Computer5}
              amount="N1000,000"
              type="ANSG2 gaming PC"
              address="AI Sufouh 1"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={Computer3}
              amount="N4500,000"
              type="Full white gaming PC"
              address="Mirdif"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={Computer4}
              amount="N1400,000"
              type="Cisco cp-8831 unified ip"
              address="Jumeirah lake towers"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={Computer2}
              amount="N3400,000"
              type="Yeti Blue Nano microphone"
              address="AI Ghubaiaba"
              link=""
            />
          </div>
        </div>

        <p className="popular_1">Mobile phones and tablets</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={phone1}
              amount="N400,000"
              type="Selling my Galaxy note9"
              address="nana street, wuse2"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={phone2}
              amount="N1000,000"
              type="Ipad 6th generation"
              address="Business Bay"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={phone3}
              amount="N2,000,000"
              type="Iphone 15promax"
              address=" Bua Estate, Kado"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={phone4}
              amount="N400,000"
              type="Samsumg Tablet A9plus"
              address="nana street, wuse2"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={phone5}
              amount="N900,000"
              type="Ipad mini"
              address="city park"
              link=""
            />
          </div>
        </div>

        <p className="popular_1">Popular Rooms for Rent</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={room1}
              amount="N200,000"
              type="Room for rent"
              address="Jahi Estate"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={room2}
              amount="N400,000"
              type="Fully closed partition near mall"
              address="Kado estate"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={room3}
              amount="N200,000"
              type="Room for rent"
              address="jabi Estate"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={room4}
              amount="N700,000"
              type="Room for rent"
              address="wuse2"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={room5}
              amount="N400,000"
              type="Room for rent"
              address="Mabushi"
              link=""
            />
          </div>
        </div>

        <p className="popular_1">Popular in Sports Equipment</p>
        <div className="firstflex">
          <div className="residential">
            <Scomp3
              s3img={exercise1}
              amount="N200,000"
              type="scot contessa"
              address="china"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={exercise2}
              amount="N300,000"
              type="scooter"
              address="india"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={exercise3}
              amount="N400,000"
              type="jack star"
              address="china"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={exercise4}
              amount="N900,000"
              type="Brandnew Eastman"
              address="London"
              link=""
            />
          </div>
          <div className="residential">
            <Scomp3
              s3img={exercise5}
              amount="N100,000"
              type="velo compact"
              address="London"
              link=""
            />
          </div>
        </div>
      </div>
      <Footer1 />
      <br />
      <br />
      <Footlong />
      <Foot />
    </div>
  );
};

export default Secland;

// import Nav from "../nav1/nav1";
// import CircularProgress from "@mui/material/CircularProgress";

// const Secland = () => {
//   // State to store user input and search result
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState([]);
//   // State to manage loader visibility
//   const [loading, setLoading] = useState(false);

//   // Function to handle user input
//   const handleInputChange = (e) => {
//     setInput(e.target.value.toLowerCase().trim());

//      const handleSearch = () => {
//        // Show loader
//        setLoading(true);

//        // Simulate loading with a 3-second timer
//        setTimeout(() => {
//          // Your existing search logic
//          const items = itemList.filter((item) =>
//            item.name.toLowerCase().includes(input.toLowerCase().slice(0, 2))
//          );

//          if (items.length > 0) {
//            setResult(items);
//          } else {
//            setResult([{ name: input, category: "Not found", img: null }]);
//          }

//          // Hide loader after search is completed
//          setLoading(false);
//        }, 3000); // 3-second delay

//   };
//   return (
//     <div>
//       <Nav />
//       <div className="mdivContainer">
//         <div className="bg-div">
//           <p className="p-bg">The leading marketplace to buy and sell cars </p>
//           <input
//             type="text"
//             placeholder="Enter item name"
//             value={input}
//             onChange={handleInputChange}
//             className="inputName"
//           />
//           <button
//             onClick={handleSearch}
//             className="motorsearch"
//             disabled={loading}
//           >
//             {/* Search */}
//             {loading ? (
//               <CircularProgress size={24} color="inherit" />
//             ) : (
//               "Search"
//             )}
//             {/* check for secular progress in mui */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// }

// export default Secland;
