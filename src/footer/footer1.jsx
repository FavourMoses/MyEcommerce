import doublephone from "../assets/doublephone.png";
import { FaApple } from "react-icons/fa";
import playstore2 from "../assets/playstore2.png";
import app_gallery from "../assets/app_gallery.png";
import "./footer.css";
const Footer1 = () => {
    return ( 
        <div>
      <div className="iconrow">
        <p className="amazingdeals">
          Find amazing deals on the go.
          <br />
          <span className="red2">Download the app now!</span>
        </p>
        <div className="gap">
          <img className="ph" src={doublephone} alt="phone" />
          <div className="scompbtnparent">
            <a className="ap" href="">
              <FaApple className="apple" />
              <p className="download">
                Download on the <br />
                <p className="bold">Appstore</p>
              </p>
            </a>
          </div>
          <div className="scompbtnparent">
            <a className="ap" href="">
              <img className="playstore" src={playstore2} />
              <p className="download">
                GET IT ON <br />
                <p className="bold">Google Play</p>
              </p>
            </a>
          </div>
          <div className="scompbtnparent">
            <a className="ap" href="">
              <img className="playstore" src={app_gallery} />
              <p className="download">
                EXPLORE IT ON <br />
                <p className="bold">AppGallery</p>
              </p>
            </a>
          </div>
        </div>
      </div>
      </div>
     );
}
 
export default Footer1;