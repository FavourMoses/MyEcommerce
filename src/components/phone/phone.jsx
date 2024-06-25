import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../nav1/nav1";
import "./phone.css";
import Footer1 from "../footer/footer1";
import Footlong from "../footer/footl2";
import Foot from "../footer/footer";
const accessToken = import.meta.env.VITE_APP_UNSPLASH_KEY;

const Phone = () => {
  const [iphones, setIphones] = useState([]);

  const phone_data = [
    { id: 1, iphone_name: "iPhone 13", color: "Orange", price: 1506.58 },
    { id: 2, iphone_name: "iPhone 12 Pro", color: "Fuscia", price: 1105.31 },
    { id: 3, iphone_name: "iPhone 14", color: "Goldenrod", price: 552.66 },
    { id: 4, iphone_name: "iPhone X", color: "Mauv", price: 413.83 },
    { id: 5, iphone_name: "iPhone X", color: "Pink", price: 1068.49 },
    { id: 6, iphone_name: "iPhone 11", color: "Aquamarine", price: 267.45 },
    { id: 7, iphone_name: "iPhone 13 Pro", color: "Yellow", price: 366.0 },
    { id: 8, iphone_name: "iPhone XR", color: "Goldenrod", price: 1962.8 },
    { id: 9, iphone_name: "iPhone 12 Pro", color: "Crimson", price: 351.06 },
    { id: 10, iphone_name: "iPhone X", color: "Purple", price: 1906.43 },
  ];

  const fetchIphones = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=iphone&client_id=${accessToken}`
    );
    console.log(res);
    if (res.status === 200) {
      const cleanedPhones = res.data.results.map((item) => {
        return {
          big_size: item.urls.full,
          small_size: item.urls.small,
        };
      });
      setIphones(cleanedPhones);
      localStorage.setItem("iphones", JSON.stringify(cleanedPhones));
    }
  };
  const smallsizephones = iphones.map((ip) => ip.small_size);

  const combinedData = phone_data.map((combo, index) => ({
    ...combo,
    image: smallsizephones[index],
  }));

  console.log(combinedData);

  //   useEffect(() => {
  //     fetchIphones();
  //   }, []);

  useEffect(() => {
    const savedIphones = localStorage.getItem("iphones");
    console.log(savedIphones);
    if (savedIphones) {
      setIphones(JSON.parse(savedIphones));
    } else {
      fetchIphones();
    }
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <Nav />
      <div className="mdivContainer">
        <div className="phone_back_ground">
          <h1 className="advertisement">Advertisement</h1>
        </div>
        <div>
          <h1>Buy & sell Mobile Phones & Tablets online in Nigeria</h1>

          <button className="under_button">
            <a href="">Mobile Phones</a>
          </button>

          <button className="under_button">
            <a href="/accesories">Mobile Phones & Tablet Accessories</a>
          </button>

          <button className="under_button">
            <a href="laptop">Laptops</a>
          </button>

          <button className="under_button">
            <a href="other"> Other Mobile Phones,Tablets & Laptops</a>
          </button>
        </div>

        <div>
          {combinedData.map((item) => (
            <div key={item.id} className="phone_row">
              <div className="ph-img-div">
                <img
                  className="phone-image"
                  src={item.image}
                  alt={item.iphone_name}
                />
              </div>
              <div className="phone-ph">
                <p className="pcolor">{item.color}</p>
                <h3 className="pname">{item.iphone_name}</h3>
                <p className="phone_price">${item.price}</p>
              </div>
            </div>
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

export default Phone;
