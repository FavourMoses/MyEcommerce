import axios from "axios";
import { useEffect, useState } from "react";
// import Nav from "../nav1/nav1";
import "./phone.css";
import Nav from "../nav1/nav1";
import Footer1 from "../footer/footer1";
import Footlong from "../footer/footl2";
import Foot from "../footer/footer";
// import Footer1 from "../footer/footer1";
// import Footlong from "../footer/footl2";
// import Foot from "../footer/footer";
const accessToken = import.meta.env.VITE_APP_UNSPLASH_KEY;

const Accessories = () => {
  const [tabletSamsung, setTabletSamsung] = useState([]);

  const phoneData = [
    {
      name: "Samsung A15",
      price: 1193.6,
      age: 2.94,
      condition: "Refurbished",
      storage: "64GB",
      warranty: false,
      color: "Maroon",
      place: "Ngenden",
      date: "4/21/2024",
    },
    {
      name: "Samsung S40",
      price: 886.34,
      age: 3.88,
      condition: "Refurbished",
      storage: "128GB",
      warranty: true,
      color: "Teal",
      place: "Fordon",
      date: "11/17/2023",
    },
    {
      name: "iPad Mini 2023 with AppleCare",
      price: 1157.74,
      age: 0.17,
      condition: "Used",
      storage: "128GB",
      warranty: true,
      color: "Teal",
      place: "Jembayan Hitam",
      date: "1/20/2024",
    },
    {
      name: "Samsung Galaxy S20",
      price: 32.15,
      age: 3.7,
      condition: "New",
      storage: "32GB",
      warranty: true,
      color: "Mauv",
      place: "‘Afula ‘Illit",
      date: "11/23/2023",
    },
    {
      name: "iPad",
      price: 1279.81,
      age: 3.41,
      condition: "New",
      storage: "32GB",
      warranty: true,
      color: "Crimson",
      place: "Mt Peto",
      date: "4/20/2024",
    },
    {
      name: "Samsung A15",
      price: 1865.31,
      age: 1.21,
      condition: "Used",
      storage: "256GB",
      warranty: false,
      color: "Fuscia",
      place: "Kwangmyŏng",
      date: "11/27/2023",
    },
    {
      name: "Samsung A10",
      price: 1467.49,
      age: 1.26,
      condition: "New",
      storage: "32GB",
      warranty: true,
      color: "Turquoise",
      place: "Jiamiao",
      date: "5/16/2024",
    },
    {
      name: "Tablet",
      price: 81.03,
      age: 4.03,
      condition: "Used",
      storage: "32GB",
      warranty: true,
      color: "Khaki",
      place: "Las Minas",
      date: "3/14/2024",
    },
    {
      name: "Samsung A19",
      price: 1015.29,
      age: 2.02,
      condition: "Used",
      storage: "32GB",
      warranty: false,
      color: "Teal",
      place: "Santa Maria",
      date: "6/16/2023",
    },
    {
      name: "Samsung S21",
      price: 666.62,
      age: 2.49,
      condition: "New",
      storage: "32GB",
      warranty: true,
      color: "Green",
      place: "Bao’an",
      date: "5/26/2024",
    },
  ];

  const fetchIphones = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=Tablet+samsung&client_id=${accessToken}`
    );
    if (res.status === 200) {
      const cleanedPhones = res.data.results.map((item) => ({
        big_size: item.urls.full,
        small_size: item.urls.small,
      }));
      setTabletSamsung(cleanedPhones);
      localStorage.setItem("tabletSamsung", JSON.stringify(cleanedPhones));
    }
  };

  const smallSizePhones = tabletSamsung.map((ip) => ip.small_size);

  const combinedData = phoneData.map((combo, index) => ({
    ...combo,
    image: smallSizePhones[index],
  }));

  useEffect(() => {
    const savedIphones = localStorage.getItem("tabletSamsung");
    if (savedIphones) {
      setTabletSamsung(JSON.parse(savedIphones));
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
          <h1 className="buysell">
            Buy & Sell Mobile Phones & Tablets Online in Nigeria
          </h1>
          <button className="under_button">
            <a href="">Mobile Phones</a>
          </button>
          <button className="under_button">
            <a href="">Mobile Phones & Tablet Accessories</a>
          </button>
          <button className="under_button">
            <a href="laptop">Laptops</a>
          </button>
          <button className="under_button">
            <a href="other">Other Mobile Phones, Tablets & Laptops</a>
          </button>
        </div>
        <div>
          {combinedData.map((item, index) => (
            <div key={index} className="phone_row">
              <div className="ph-img-div">
                <img className="phone-image" src={item.image} alt={item.name} />
              </div>
              <div className="phone-ph">
                <p className="pcolor">{item.name}</p>
                <h3 className="pname">${item.price}</h3>
                <div className="color-age-condition">
                  <div className="colour-div">
                    <p>COLOUR</p>
                    <h3>{item.color}</h3>
                  </div>
                  <div className="colour-div">
                    <p>AGE</p> <h3>{item.age}</h3>
                  </div>
                  <div className="colour-div">
                    <p>CONDITION</p>
                    <h3 className="phone_price">{item.condition}</h3>
                  </div>
                </div>
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

export default Accessories;
