import "./landing.css";
import { PiCopyrightLight } from "react-icons/pi";
import Landcomp2 from "./landcomp2";
import Landcomp from "./landcomp";

const Landing = () => {
  return (
    <div className="hcontainer">
      <h1 className="boss">
        <span className="boss2">Soft</span> Market
      </h1>
      {/* <img className="himg" src={image1} alt="home" /> */}
      <div className="hd1">
        <p className="hp1">
          Welcome to the Nigeria #1 <br />
          online classified website!
        </p>
        <p className="hp2">Which city would you like to Explore?</p>
      </div>
      <div className="compdiv">
        <Landcomp page="/second" pagecontent="Abuja" />
        <Landcomp page="/second" pagecontent="Abuja" />
        <Landcomp page="/second" pagecontent="Abuja" />
        <Landcomp page="/second" pagecontent="Abuja" />{" "}
      </div>
      <div className="compdiv2">
        <Landcomp page="/second" pagecontent="Abuja" />
        <Landcomp page="/second" pagecontent="Abuja" />
        <Landcomp page="/second" pagecontent="Abuja" />
        <Landcomp page="/second" pagecontent="Abuja" />
      </div>
      <p className="join">
        Join millions of users to buy and sell anything in Nigeria
      </p>
      <div className="hcomp2">
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
      </div>

      <div className="hcomp3">
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
        <Landcomp2
          hd=" Nigeria"
          page=""
          parapage1=""
          parapage2=""
          parapage3=""
          parapage4=""
          parapage5=""
          parapage6=""
          parapage7=""
          pagecontent1="Abuja"
          pagecontent2="Abuja"
          pagecontent3="Abuja"
          pagecontent4="Abuja"
          pagecontent5="Abuja"
          pagecontent6="Abuja"
          pagecontent7="Abuja"
        />
      </div>
      <p className="group">
        Soft <br />
        <span className="group2">group</span>
      </p>
      <p className="foot">
        <PiCopyrightLight />
        softmarket.com 2024, All rights reserved
      </p>
    </div>
  );
};

export default Landing;
