// import Nav from "../nav1/nav1";
import "./motors.css";
import { useState } from "react";


import carmercedes1 from "../../assets/carmercedes1.png";
import carmercedes2 from "../../assets/carmercedes2.png";
import carmercedes3 from "../../assets/carmercedes3.png";
import carmercedes4 from "../../assets/carmercedes4.png";
import carmercedes5 from "../../assets/carmercedes5.png";
import carmercedes6 from "../../assets/carmercedes6.png";

import carlamb1 from "../../assets/carlamb1.png";
import carlamb2 from "../../assets/carlamb2.png";
import carlamb3 from "../../assets/carlamb3.png";
import carlamb4 from "../../assets/carlamb4.png";
import carlamb5 from "../../assets/carlamb5.png";
import carlamb6 from "../../assets/carlamb6.png";

import carjeep1 from "../../assets/carjeep1.png";
import carjeep2 from "../../assets/carjeep2.png";
import carjeep3 from "../../assets/carjeep3.png";
import carjeep4 from "../../assets/carjeep4.png";
import carjeep5 from "../../assets/carjeep5.png";
import carjeep6 from "../../assets/carjeep6.png";

import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import Nav from "../nav1/nav1";
import Footlong from "../footer/footl2";
import Foot from "../footer/footer";
import Footer1 from "../footer/footer1";

import CircularProgress from "@mui/material/CircularProgress";

const Motor = () => {
  const itemList = [
    {
      id: 1,
      name: "Mercedes",
      img: carmercedes1,
      category: "Mercedes-Benz A-Class",
      price: 3000,
      model: "2008 . 103,254km",
    },
    {
      id: 2,
      name: "Mercedes",
      img: carmercedes2,
      category: "Mercedes-Benz C-Class",
      price: 6000,
      model: "2010 . 105,254km",
    },
    {
      id: 3,
      name: "Mercedes",
      img: carmercedes3,
      category: "Mercedes",
      price: 7000,
      model: "2015 . 110,254km",
    },
    {
      id: 4,
      name: "Mercedes",
      img: carmercedes4,
      category: "Mercedes-Benz CLA",
      price: 9000,
      model: "2010 . 105,254km",
    },
    {
      id: 5,
      name: "Mercedes",
      img: carmercedes5,
      category: "Mercedes-Benz GLA",
      price: 13000,
      model: "2015 . 110,254km",
    },
    {
      id: 6,
      name: "Mercedes",
      img: carmercedes6,
      category: "Mercedes-Benz EQS",
      price: 2000,
      model: "2008 . 103,254km",
    },
    {
      id: 7,
      name: "Lamborghini",
      img: carlamb1,
      category: "Aventador",
      price: 15000,
      model: "Centenario (2016-2017)",
    },
    {
      id: 8,
      name: "Lamborghini",
      img: carlamb2,
      category: "Huracán Super Trofeo EVO",
      price: 16000,
      model: "Sián FKP 37 (2019-present)",
    },
    {
      id: 9,
      name: "Lamborghini",
      img: carlamb3,
      category: "Huracán GT3 EVO",
      price: 17000,
      model: "Terzo Millennio (2017)",
    },
    {
      id: 10,
      name: "Lamborghini",
      img: carlamb4,
      category: "Gallardo LP 570-4 Super Trofeo",
      price: 18000,
      model: "Centenario (2016-2017)",
    },
    {
      id: 11,
      name: "Lamborghini",
      img: carlamb5,
      category: "Aventador",
      price: 19000,
      model: "Sián FKP 37 (2019-present)",
    },
    {
      id: 12,
      name: "Lamborghini",
      img: carlamb6,
      category: "sports",
      price: 21000,
      model: "Centenario (2016-2017)",
    },
    {
      id: 13,
      name: "Jeep",
      img: carjeep1,
      category: "Jeep Magneto",
      price: 21000,
      model: "(Electric Concept)",
    },
    {
      id: 14,
      name: "Jeep",
      img: carjeep2,
      category: "Cherokee",
      price: 11000,
      model: 2009,
    },
    {
      id: 15,
      name: "Jeep",
      img: carjeep3,
      category: "Grand Cherokee",
      price: 31000,
      model: 2020,
    },
    {
      id: 16,
      name: "Jeep",
      img: carjeep4,
      category: "Wrangler",
      price: 12000,
      model: "Wrangler 392 (V8 Engine)",
    },
    {
      id: 17,
      name: "Jeep",
      img: carjeep5,
      category: "Compass",
      price: 13000,
      model: "compass sport 2021",
    },
    {
      id: 18,
      name: "Jeep",
      img: carjeep6,
      category: "Grand Cherokee",
      price: 15000,
      model: 2020,
    },
  ];
  const defaultItems = [
    {
      id: 1,
      name: "cars",
      img: car1,
      category: "Cherokee",
      price: 5000,
      model: "Cherokee Trailhawk 2021",
    },
    {
      id: 2,
      name: "cars",
      img: car2,
      category: "Grand Cherokee",
      price: 6000,
      model: "Grand Cherokee 4xe (Plug-in Hybrid)",
    },
    {
      id: 3,
      name: "cars",
      img: car3,
      category: "Compass",
      price: 7000,
      model: "Compass sport",
    },
    {
      id: 4,
      name: "cars",
      img: car4,
      category: "Renegade",
      price: 1000,
      model: "Renegade Latitude",
    },
    {
      id: 5,
      name: "cars",
      img: car5,
      category: "Gladiator",
      price: 2000,
      model: "Gladiator Mojave",
    },
    {
      id: 6,
      name: "cars",
      img: car6,
      category: "Compass",
      price: 3000,
      model: "Compass sport",
    },
  ];

  // State to store user input and search result
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  // State to manage loader visibility
  const [loading, setLoading] = useState(false);

  // Function to handle user input
  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase().trim());
  };

  // Function to handle search action
  // const handleSearch = () => {
  //   const items = itemList.filter(
  //     (item) => item.name.toLowerCase() === input.toLowerCase()
  //   );

  //   if (items.length > 0) {
  //     setResult(items);
  //   } else {
  //     setResult([{ name: input, category: "Not found", img: null }]);
  //   }
  //   console.log("Filtered items:", items);

  // Function to handle search action with loader
  const handleSearch = () => {
    // Show loader
    setLoading(true);

    // Simulate loading with a 3-second timer
    setTimeout(() => {
      // Your existing search logic
      const items = itemList.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase().slice(0, 2))
      );

      if (items.length > 0) {
        setResult(items);
      } else {
        setResult([{ name: input, category: "Not found", img: null }]);
      }

      // Hide loader after search is completed
      setLoading(false);
    }, 3000); // 3-second delay
  };
  return (
    <div style={{ padding: "20px" }}>
      <Nav />
      <div className="mdivContainer">
        <div className="bg-div">
          <p className="p-bg">The leading marketplace to buy and sell cars </p>
          <input
            type="text"
            placeholder="Enter item name"
            value={input}
            onChange={handleInputChange}
            className="inputName"
          />
          <button
            onClick={handleSearch}
            className="motorsearch"
            disabled={loading}
          >
            {/* Search */}
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Search"
            )}
            {/* check for secular progress in mui */}
          </button>
        </div>

        <p className="popular">Popular in cars</p>

        {/* this will appear based on typed input */}
        <div className="categorydiv">
          {result.length > 0 &&
            // loading===false
            result.map((item, index) => (
              <a href="" key={index} className="scomp3p">
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="mcategoryimg"
                  />
                )}
                <p className="red">${item.price}</p>
                <h3 className="type">{item.category}</h3>
                <p className="address">{item.model}</p>
              </a>
            ))}
        </div>

        {/* constant images items */}
        <div className="categorydiv">
          {defaultItems.length > 0 &&
            defaultItems.map((item, index) => (
              <a href="" key={index} className="scomp3p">
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="mcategoryimg"
                  />
                )}
                <p className="red">${item.price}</p>
                <h3 className="type">{item.category}</h3>
                <p className="address">{item.model}</p>
              </a>
            ))}
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
export default Motor;
