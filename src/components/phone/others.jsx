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

const Others = () => {
  const [products, setProducts] = useState([]);

  const product_data = [
    { id: 1, name: "Dell XPS 13 (11th Gen)", color: "Orange", price: 1506.58 },
    { id: 2, name: "ipad", color: "Fuscia", price: 1105.31 },
    {
      id: 3,
      name: "HP Spectre x360 (11th Gen)",
      color: "Goldenrod",
      price: 999.99,
    },
    { id: 4, name: "MacBook Air 2023 (M2)", color: "Blue", price: 899.99 },
    { id: 5, name: "Dell XPS 13 (10th Gen)", color: "Green", price: 699.99 },
    { id: 6, name: "MacBook Air 2023 (M2)", color: "Black", price: 199.99 },
    { id: 7, name: "MacBook Pro", color: "Silver", price: 2399.99 },
    { id: 8, name: "iPad Pro", color: "Space Grey", price: 1099.99 },
    { id: 9, name: "Samsung Galaxy Tab S7", color: "Bronze", price: 649.99 },
    {
      id: 10,
      name: "HP Pavilion 15 (10th Gen)",
      color: "Aquamarine",
      price: 267.45,
    },
  ];

  const fetchIphones = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=iphone+Tablet+samsung+laptop&client_id=${accessToken}`
    );
    if (res.status === 200) {
      const cleanedPhones = res.data.results.map((item) => ({
        big_size: item.urls.full,
        small_size: item.urls.small,
      }));
      setProducts(cleanedPhones);
      localStorage.setItem(
        "iphoneTabletSamsungLaptop",
        JSON.stringify(cleanedPhones)
      );
    }
  };

  const smallSizePhones = products.map((ip) => ip.small_size);

  const combinedData = product_data.map((combo, index) => ({
    ...combo,
    image: smallSizePhones[index],
  }));

  useEffect(() => {
    const savedIphones = localStorage.getItem("iphoneTabletSamsungLaptop");
    if (savedIphones) {
      setProducts(JSON.parse(savedIphones));
    } else {
      fetchIphones();
    }
  }, []);

  // const fetchProducts = async (query) => {
  //   try {
  //     const res = await axios.get(
  //       `https://api.unsplash.com/search/photos/?query=${query}&client_id=${accessToken}`
  //     );
  //     if (res.status === 200) {
  //       console.log(`Fetched images for ${query}:`, res.data.results); // Debugging
  //       return res.data.results.map((item) => ({
  //         big_size: item.urls.full,
  //         small_size: item.urls.small,
  //       }));
  //     }
  //   } catch (error) {
  //     console.error(`Error fetching images for ${query}:`, error);
  //   }
  //   return [];
  // };

  // const fetchAllProducts = async () => {
  //   const queries = [
  //     "iphone",
  //     "samsung",
  //     "oppo",
  //     "tecno",
  //     "infinix",
  //     "laptop",
  //     "tablet",
  //   ];
  //   let allImages = [];
  //   for (const query of queries) {
  //     const images = await fetchProducts(query);
  //     allImages = [...allImages, ...images];
  //   }
  //   console.log("All fetched images:", allImages); // Debugging
  //   setProducts(allImages);
  //   localStorage.setItem("products", JSON.stringify(allImages));
  // };

  // useEffect(() => {
  //   const savedProducts = localStorage.getItem("products");
  //   if (savedProducts) {
  //     setProducts(JSON.parse(savedProducts));
  //   } else {
  //     fetchAllProducts();
  //   }
  // }, []);

  // const smallSizeProducts = Array.isArray(products)
  //   ? products.map((product) => product.small_size)
  //   : [];

  // const combinedData = product_data.map((combo, index) => ({
  //   ...combo,
  //   image: smallSizeProducts[index] || "default_image_url_here", // Use a default image if none fetched
  // }));

  // console.log("Combined Data:", combinedData); // Debugging

  return (
    <div style={{ padding: "20px" }}>
      <Nav />
      <div className="mdivContainer">
        <div className="phone_back_ground">
          <h1 className="advertisement">Advertisement</h1>
        </div>
        <div>
          <h1>Buy & sell Mobile Phones, Laptops & Tablets online in Nigeria</h1>

          <button className="under_button">
            <a href="#">Mobile Phones</a>
          </button>

          <button className="under_button">
            <a href="/accesories">Mobile Phones & Tablet Accessories</a>
          </button>

          <button className="under_button">
            <a href="/laptop">Laptops</a>
          </button>

          <button className="under_button">
            <a href="/other">Other Mobile Phones & Tablets</a>
          </button>
        </div>

        <div>
          {combinedData.map((item) => (
            <div key={item.id} className="phone_row">
              <div className="ph-img-div">
                <img className="phone-image" src={item.image} alt={item.name} />
              </div>
              <div className="phone-ph">
                <span className="pcolor">{item.color}</span>
                <h3 className="pname">{item.name}</h3>
                <p className="phone_price">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer1 />
      <br />
      <br />
      <Footlong/>
      <Foot />
    </div>
  );
};

export default Others;
