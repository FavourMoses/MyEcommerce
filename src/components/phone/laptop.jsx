import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../nav1/nav1";
import "./phone.css";
import Footer1 from "../footer/footer1";
import Footlong from "../footer/footl2";
import Foot from "../footer/footer";
const accessToken = import.meta.env.VITE_APP_UNSPLASH_KEY;

const Laptop = () => {
  const [laptops, setLaptops] = useState([]);

  const laptopData = [
    {
      name: "Dell XPS 13 (11th Gen)",
      price: 1299.99,
      age: 1.5,
      condition: "Refurbished",
      storage: "512GB",
      warranty: false,
      color: "Silver",
      place: "Ngenden",
    },
    {
      name: "HP Spectre x360 (11th Gen)",
      price: 1399.99,
      age: 2.0,
      condition: "Refurbished",
      storage: "1TB",
      warranty: true,
      color: "Black",
      place: "Fordon",
    },
    {
      name: "MacBook Air 2023 (M2)",
      price: 999.99,
      age: 0.17,
      condition: "Used",
      storage: "256GB",
      warranty: true,
      color: "Space Gray",
      place: "Jembayan Hitam",
    },
    {
      name: "HP Pavilion 15 (10th Gen)",
      price: 649.99,
      age: 3.7,
      condition: "New",
      storage: "256GB",
      warranty: true,
      color: "Blue",
      place: "‘Afula ‘Illit",
    },
    {
      name: "Dell Inspiron 15 (11th Gen)",
      price: 799.99,
      age: 1.5,
      condition: "New",
      storage: "1TB",
      warranty: true,
      color: "White",
      place: "Mt Peto",
    },
    {
      name: "MacBook Pro 2021 (M1 Pro)",
      price: 2299.99,
      age: 1.21,
      condition: "Used",
      storage: "512GB",
      warranty: false,
      color: "Silver",
      place: "Kwangmyŏng",
    },
    {
      name: "HP Envy 13 (11th Gen)",
      price: 1099.99,
      age: 1.26,
      condition: "New",
      storage: "256GB",
      warranty: true,
      color: "Gold",
      place: "Jiamiao",
    },
    {
      name: "Dell Latitude 14 (9th Gen)",
      price: 499.99,
      age: 4.03,
      condition: "Used",
      storage: "128GB",
      warranty: true,
      color: "Gray",
      place: "Las Minas",
    },
    {
      name: "MacBook Air 2019 (M1)",
      price: 899.99,
      age: 2.02,
      condition: "Used",
      storage: "128GB",
      warranty: false,
      color: "Gold",
      place: "Santa Maria",
    },
    {
      name: "HP Omen 17 (10th Gen)",
      price: 1599.99,
      age: 2.49,
      condition: "New",
      storage: "1TB",
      warranty: true,
      color: "Black",
      place: "Bao’an",
    },
  ];

  const fetchLaptops = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=laptops&client_id=${accessToken}`
    );
    if (res.status === 200) {
      const cleanedLaptops = res.data.results.map((item) => ({
        big_size: item.urls.full,
        small_size: item.urls.small,
      }));
      setLaptops(cleanedLaptops);
      localStorage.setItem("laptops", JSON.stringify(cleanedLaptops));
    }
  };

  const smallSizeLaptops = laptops.map((lp) => lp.small_size);

  const combinedData = laptopData.map((combo, index) => ({
    ...combo,
    image: smallSizeLaptops[index],
  }));

  useEffect(() => {
    const savedLaptops = localStorage.getItem("laptops");
    if (savedLaptops) {
      setLaptops(JSON.parse(savedLaptops));
    } else {
      fetchLaptops();
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
          <h1 className="buysell">Buy & Sell Laptops Online in Nigeria</h1>
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
          {combinedData.map((item, index) => (
            <div key={index} className="phone_row">
              <div className="ph-img-div">
                <img className="phone-image" src={item.image} alt={item.name} />
              </div>
              <div className="phone-ph">
                <p className="pcolor">{item.name}</p>
                <h3 className="pname">${item.price}</h3>
                <div className="color-age-condition">
                  <div className="colour-div2">
                    <p>COLOUR</p>
                    <h4>{item.color}</h4>
                  </div>
                  <div className="colour-div2">
                    <p>AGE</p> <h3>{item.age}</h3>
                  </div>
                  <div className="colour-div2">
                    <p>CONDITION</p>
                    <h4 className="phone_price">{item.condition}</h4>
                  </div>
                  <div className="colour-div2">
                    <p>STORAGE</p>
                    <h4 className="phone_price">{item.storage}</h4>
                  </div>
                  <div className="colour-div2">
                    <p>PLACE</p>
                    <h4 className="phone_price">{item.place}</h4>
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

export default Laptop;
