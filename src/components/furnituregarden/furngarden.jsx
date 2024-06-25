import Foot from "../footer/footer";
import Footer1 from "../footer/footer1";
import Footlong from "../footer/footl2";
import Nav from "../nav1/nav1";
import "./furngarden.css";
import {useEffect, useState } from "react";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
const accessToken = import.meta.env.VITE_APP_UNSPLASH_KEY;

const Furngarden = () => {
  const [products, setProducts] = useState([]);
  const fg_data = [
  {
    descriptive_name: "Vision-oriented 3rd generation conglomeration",
    category: "furniture",
    price: 1495750.05,
    age: "7 months",
    usage: "normal used",
    condition: "excellent",
    location: "Glyadyanskoye",
    date: "5/20/2021",
    id: 1,
  },
  {
    descriptive_name: "Visionary global migration",
    category: "garden",
    price: 4495526.22,
    age: "11 months",
    usage: "brand new",
    condition: "flawless",
    location: "Columbus",
    date: "5/28/2021",
    id: 2,
  },
  {
    descriptive_name: "Multi-tiered solution-oriented synergy",
    category: "garden",
    price: 4060479.14,
    age: "6 months",
    usage: "over used",
    condition: "good",
    location: "Gaoguan",
    date: "11/18/2021",
    id: 3,
  },
  {
    descriptive_name: "Fully-configurable actuating structure",
    category: "garden",
    price: 689974.91,
    age: "9 months",
    usage: "over used",
    condition: "flawless",
    location: "Gagnoa",
    date: "5/10/2021",
    id: 4,
  },
  {
    descriptive_name: "Fundamental national forecast",
    category: "garden",
    price: 4446668.47,
    age: "9 months",
    usage: "over used",
    condition: "good",
    location: "Dongyuan",
    date: "1/3/2021",
    id: 5,
  },
  {
    descriptive_name: "User-friendly system-worthy budgetary management",
    category: "furniture",
    price: 4661703.7,
    age: "10 months",
    usage: "brand new",
    condition: "flawless",
    location: "Brusyanka",
    date: "2/2/2021",
    id: 6,
  },
  {
    descriptive_name: "Face to face explicit orchestration",
    category: "furniture",
    price: 2912597.61,
    age: "8 months",
    usage: "over used",
    condition: "excellent",
    location: "Bangued",
    date: "3/7/2021",
    id: 7,
  },
  {
    descriptive_name: "Open-architected bottom-line contingency",
    category: "garden",
    price: 2530623.13,
    age: "4 months",
    usage: "over used",
    condition: "flawless",
    location: "Březová",
    date: "3/7/2021",
    id: 8,
  },
  {
    descriptive_name: "Enterprise-wide secondary framework",
    category: "garden",
    price: 1966580.1,
    age: "12 months",
    usage: "normal used",
    condition: "good",
    location: "Chernomorskiy",
    date: "8/11/2021",
    id: 9,
  },
  {
    descriptive_name: "Progressive multi-state model",
    category: "furniture",
    price: 3687280.58,
    age: "11 months",
    usage: "brand new",
    condition: "flawless",
    location: "Ddmashen",
    date: "9/22/2021",
    id: 10,
  },
  {
    descriptive_name: "Synchronised user-facing internet solution",
    category: "garden",
    price: 2103106.07,
    age: "11 months",
    usage: "normal used",
    condition: "flawless",
    location: "Toulouse",
    date: "3/20/2021",
    id: 11,
  },
  {
    descriptive_name: "Persevering interactive middleware",
    category: "garden",
    price: 418358.23,
    age: "3 months",
    usage: "normal used",
    condition: "flawless",
    location: "Järfälla",
    date: "10/17/2021",
    id: 12,
  },
  {
    descriptive_name: "Progressive bandwidth-monitored architecture",
    category: "furniture",
    price: 2831382.9,
    age: "2 months",
    usage: "normal used",
    condition: "flawless",
    location: "Minle",
    date: "7/27/2021",
    id: 13,
  },
  {
    descriptive_name: "Enterprise-wide explicit budgetary management",
    category: "garden",
    price: 1178712.24,
    age: "10 months",
    usage: "normal used",
    condition: "flawless",
    location: "Shiroi",
    date: "10/19/2021",
    id: 14,
  },
  {
    descriptive_name: "Persevering hybrid implementation",
    category: "furniture",
    price: 1808456.09,
    age: "7 months",
    usage: "over used",
    condition: "excellent",
    location: "Rybatskoye",
    date: "7/19/2021",
    id: 15,
  },
  {
    descriptive_name: "Proactive high-level flexibility",
    category: "garden",
    price: 2011657.8,
    age: "3 months",
    usage: "normal used",
    condition: "excellent",
    location: "Knysna",
    date: "5/12/2021",
    id: 16,
  },
  {
    descriptive_name: "Re-engineered needs-based monitoring",
    category: "garden",
    price: 1887769.8,
    age: "10 months",
    usage: "normal used",
    condition: "excellent",
    location: "Xufu",
    date: "7/6/2021",
    id: 17,
  },
  {
    descriptive_name: "Programmable solution-oriented orchestration",
    category: "garden",
    price: 3968600.13,
    age: "5 months",
    usage: "normal used",
    condition: "excellent",
    location: "Tumauini",
    date: "7/19/2021",
    id: 18,
  },
  {
    descriptive_name: "Horizontal dedicated process improvement",
    category: "garden",
    price: 2939608.77,
    age: "1 month",
    usage: "brand new",
    condition: "flawless",
    location: "Dzüünbulag",
    date: "4/14/2021",
    id: 19,
  },
  {
    descriptive_name: "Universal system-worthy conglomeration",
    category: "garden",
    price: 466387.61,
    age: "1 month",
    usage: "over used",
    condition: "excellent",
    location: "Manzanares",
    date: "7/15/2021",
    id: 20,
  },
  {
    descriptive_name: "Optimized asynchronous productivity",
    category: "furniture",
    price: 3222065.12,
    age: "7 months",
    usage: "brand new",
    condition: "good",
    location: "Sucre",
    date: "1/14/2021",
    id: 21,
  },
  {
    descriptive_name: "Compatible zero defect encoding",
    category: "garden",
    price: 2645332.33,
    age: "4 months",
    usage: "normal used",
    condition: "excellent",
    location: "Dailing",
    date: "3/16/2021",
    id: 22,
  },
  {
    descriptive_name: "Robust logistical success",
    category: "garden",
    price: 3240096.23,
    age: "2 months",
    usage: "brand new",
    condition: "flawless",
    location: "Los Angeles",
    date: "6/20/2021",
    id: 23,
  },
  {
    descriptive_name: "Reverse-engineered coherent instruction set",
    category: "furniture",
    price: 543520.56,
    age: "7 months",
    usage: "brand new",
    condition: "good",
    location: "Bagamoyo",
    date: "1/13/2021",
    id: 24,
  },
  {
    descriptive_name: "Secured tertiary workforce",
    category: "furniture",
    price: 3724418.06,
    age: "11 months",
    usage: "brand new",
    condition: "flawless",
    location: "Sangkulirang",
    date: "5/5/2021",
    id: 25,
  },
]
const fetchFG = async () => {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos/?query=Furniture&client_id=${accessToken}`
  );
  if (res.status === 200) {
    const cleanedFG = res.data.results.map((item) => ({
      big_size: item.urls.full,
      small_size: item.urls.small,
    }));
    setProducts(cleanedFG);
    localStorage.setItem(
      "furniture",
      JSON.stringify(cleanedFG)
    );
  }
};

const smallSizeFG = products.map((ip) => ip.small_size);

const combinedData = fg_data.map((combo, index) => ({
  ...combo,
  image: smallSizeFG[index],
}));

useEffect(() => {
  const savedFG = localStorage.getItem("furniture");
  if (savedFG) {
    setProducts(JSON.parse(savedFG));
  } else {
    fetchFG();
  }
}, []);
  


  return (
    <div>
      <Nav />

      <div className="FG_back_ground">
        <h1 className="FGadvertisement">Advertisement</h1>
      </div>

      <div className="parentalMargin">
        <div className="FG-parent">
          <div className="FG-parent-d1">
            <p className="FG-parent-d1-p">
              <strong>City</strong> <br />
              Nigeria
            </p>
          </div>
          <hr></hr>
          <div className="FG-parent-d1">
            <strong>Keyword</strong>
            <input
              className="FG-parent-d1-input1"
              placeholder="Search anything"
            />
            <IoSearchOutline className="FG-icon" />
          </div>
          <hr></hr>
          <div className="FG-parent-d1">
            <p className="FG-parent-d1-p">
              <strong>Neighbourhood</strong> <br />
              Search
            </p>
          </div>
          <hr></hr>
          <div className="FG-parent-d1">
            <p className="FG-parent-d1-p">
              <strong>Price (NAIRA)</strong> <br /> Search
            </p>
          </div>
          <hr></hr>
          <div className="FG-parent-d1">
            <p className="FG-parent-d1-p">
              <strong>Filters</strong> <br /> Category, Age, etc
            </p>
          </div>
        </div>

        <div className="nig-classified">
          <a href="">Nigeria</a> <a href="">Classified</a>
          <p>Furniture, Home & Garden</p>
        </div>

        <div className="div-buy-ss">
          <h2>
            Buy & sell Furniture, Home & Garden online in Dubai, UAE • 64,961
            Ads
          </h2>
          <div className="buy-sort-save">
            <div className="sort">
              <p>Sort: </p> <h3> Default</h3>
            </div>
            <div className="saveSearch">
              <p>Save Search</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            {combinedData.map((item, index) => (
              <div key={index} className="phone_row">
                <div className="ph-img-div">
                  <img
                    className="phone-image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="phone-ph">
                  {/* <p className="pcolor">{item.name}</p> */}
                  <h3 className="pname">{item.descriptive_name}</h3>
                  <p>{item.category}</p>
                  <h3 className="pname">N{item.price}</h3>
                  <div className="color-age-condition">
                    <div className="colour-div2">
                      <p>AGE</p> <h3>{item.age}</h3>
                    </div>
                    <div className="colour-div2">
                      <p>STORAGE</p>
                      <h4 className="phone_price">{item.usage}</h4>
                    </div>
                    <div className="colour-div2">
                      <p>CONDITION</p>
                      <h4 className="phone_price">{item.condition}</h4>
                    </div>
                  </div>
                  <div className="location-date">
                    <p>{item.location}</p> .<p>{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="numberdiv">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
          </div>
        </div>
        <Footer1 />
        <br />
        <br />
        <Footlong />
        <Foot />
      </div>
    </div>
  );
};

export default Furngarden;
