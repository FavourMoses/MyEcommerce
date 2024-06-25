import Nav from "../nav1/nav1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import "./community.css"
import checksecond from "../../assets/checksecond.png";
import community1 from "../../assets/community1.png";
import community2 from "../../assets/community2.png";
import community3 from "../../assets/community3.png";
import community4 from "../../assets/community4.png";
import community5 from "../../assets/community5.png";
import CommunComp from "./communcomp";
import Footer1 from "../footer/footer1";
import Footlong from "../footer/footl2";
import Foot from "../footer/footer";

const Community = () => {
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
           <div className="bg-div3">
             <p className="p-bg2">
               From movers to tutors, help is one click away
             </p>
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
           <button className="commun_button">
             <a href="">
               <p>HOME MAINTENANCE </p>
               <p>1,917</p>
             </a>
           </button>

           <button className="commun_button">
             <a href="/accesories">
               <p>TUTORS & CLASSES </p>
               <p>1,481</p>
             </a>
           </button>

           <button className="commun_button">
             <a href="laptop">
               <p>CONSULTANCY SERVICES </p>
               <p>1,178</p>
             </a>
           </button>

           <button className="commun_button">
             <a href="other">
               <p>MOVERS & REMOVALS </p>
               <p>525</p>
             </a>
           </button>
           <button className="commun_button">
             <a href="other">
               <p>FREELANCERS </p>
               <p>418</p>
             </a>
           </button>
           <button className="commun_button">
             <a href="other">
               <p>OTHER SERVICES </p>
               <p>317</p>
             </a>
           </button>
           <div className="communcheck">
             <div className="communcheck2">
               <img src={checksecond} alt="check" />
               <h4>Got a verified batch yet? </h4>
               <p>Get more visibility | Enhance your credibility</p>
             </div>
             <button className="getstarted">Get started</button>
           </div>
           <h1>Featured Listings</h1>

           <div className="commun-div">
             <div className="co__div3">
               <CommunComp
                 comimage={community1}
                 comh3="200/NAIRA for 1Hr-Portrait Phot..."
                 comp1="Abuja"
                 comp2="an hour ago"
               />
             </div>

             <div className="co__div3">
               <CommunComp
                 comimage={community2}
                 comh3="PROFFESSIONAL HOME MOVERS..."
                 comp1="Business Bay"
                 comp2="3 hours ago"
               />
             </div>

             <div className="co__div3">
               <CommunComp
                 comimage={community3}
                 comh3="Car Photography"
                 comp1="Lagos"
                 comp2="5 hours ago"
               />
             </div>

             <div className="co__div3">
               <CommunComp
                 comimage={community4}
                 comh3="Painting Services in Abuja - Affo..."
                 comp1="Abuja Maitama"
                 comp2="5 hours ago"
               />
             </div>

             <div className="co__div3">
               <CommunComp
                 comimage={community5}
                 comh3="Driving skill, Refreshment drivin..."
                 comp1="Port Harcourt"
                 comp2="7 hours ago"
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
}
 
export default Community;