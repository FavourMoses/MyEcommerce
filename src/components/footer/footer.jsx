import "./footer.css"
import footerlogo from "../../assets/footerlogo.png"
import { PiCopyrightLight } from "react-icons/pi";
const Foot = () => {
  return (
    <div>
      <div className="finalft">
        <div className="ftleft">
          <p className="group">
            Soft
            <span className="group2">group</span>
          </p>
          <p className="ft">
            <PiCopyrightLight />
            softgroup.com 2024, All rights reserved
          </p>
        </div>

        <img src={footerlogo} alt="logo" />
      </div>
    </div>
  );
};

export default Foot;
