import Foot from "../footer/footer";
import Footer1 from "../footer/footer1";
import Nav1 from "../nav1/nav1";
import Scomp from "./hcomp";
import "./home.css";
// import { PiCopyrightLight } from "react-icons/pi";
const Home1 = () => {
const Products = [
  {
    id: 1,
    img: "https://picsum.photos/200?random=6",
    
  },
  { id: 2, img: "https://picsum.photos/200?random=1" },
  { id: 3, img: "https://picsum.photos/200?random=2" },
  { id: 4, img: "https://picsum.photos/200?random=3" },
  { id: 5, img: "https://picsum.photos/200?random=4" },
   {id: 6,
    img: "https://picsum.photos/200?random=7",
  },
  { id: 7, img: "https://picsum.photos/200?random=8" },
  { id: 8, img: "https://picsum.photos/200?random=9" },
  { id: 9, img: "https://picsum.photos/200?random=10" },
  { id: 10, img: "https://picsum.photos/200?random=11" },

  


  {
    id :11,

    img: "https://picsum.photos/id/2/200/300",
  },
  { id :12, img: "https://picsum.photos/id/1/200/300" },
  {
    id :13,

    img: "https://picsum.photos/id/3/200/300",
  },
  { id :14, img: "https://picsum.photos/id/4/200/300" },
  
  { id :15, img: "https://picsum.photos/id/6/200/300" },
];

// const updatedCart = cart.filter((item) => item.id !== id);
// localStorage.setItem("cart", JSON.stringify(updatedCart));
// setCart(updatedCart);




// const phone =[
//   {
//     id: 1,
//     ip_address: "108.183.4.173",
//     phone_brand: "Huawei",
//     phone_model: "P40 Pro",
//     phone_color: "Red",
//     phone_price: 761.07,
//     phone_release_date: "7/11/2015",
//     laptop_brand: "Apple",
//     laptop_model: "ZenBook",
//     laptop_color: "Gray",
//     laptop_price: 1684.57,
//     laptop_release_date: "10/23/2015",
//   },
//   {
//     id: 2,
//     ip_address: "80.4.87.85",
//     phone_brand: "OnePlus",
//     phone_model: "OnePlus 9",
//     phone_color: "Silver",
//     phone_price: 400.32,
//     phone_release_date: "7/13/2016",
//     laptop_brand: "Lenovo",
//     laptop_model: "ThinkPad X1",
//     laptop_color: "Rose Gold",
//     laptop_price: 2787.4,
//     laptop_release_date: "6/16/2018",
//   },
//   {
//     id: 3,
//     ip_address: "219.169.117.207",
//     phone_brand: "Apple",
//     phone_model: "Pixel 5",
//     phone_color: "Blue",
//     phone_price: 1285.58,
//     phone_release_date: "11/26/2019",
//     laptop_brand: "Dell",
//     laptop_model: "XPS 13",
//     laptop_color: "Silver",
//     laptop_price: 2096.48,
//     laptop_release_date: "2/15/2017",
//   },
//   {
//     id: 4,
//     ip_address: "201.253.87.59",
//     phone_brand: "Samsung",
//     phone_model: "iPhone 12",
//     phone_color: "Red",
//     phone_price: 501.93,
//     phone_release_date: "7/7/2011",
//     laptop_brand: "Apple",
//     laptop_model: "ThinkPad X1",
//     laptop_color: "Blue",
//     laptop_price: 1606.75,
//     laptop_release_date: "1/13/2019",
//   },
//   {
//     id: 5,
//     ip_address: "178.91.220.106",
//     phone_brand: "OnePlus",
//     phone_model: "P40 Pro",
//     phone_color: "Silver",
//     phone_price: 804.03,
//     phone_release_date: "11/10/2021",
//     laptop_brand: "Asus",
//     laptop_model: "ZenBook",
//     laptop_color: "Blue",
//     laptop_price: 2025.92,
//     laptop_release_date: "11/3/2017",
//   },
//   {
//     id: 6,
//     ip_address: "255.113.183.20",
//     phone_brand: "Apple",
//     phone_model: "Galaxy S21",
//     phone_color: "Blue",
//     phone_price: 1952.22,
//     phone_release_date: "8/27/2017",
//     laptop_brand: "Asus",
//     laptop_model: "Spectre x360",
//     laptop_color: "Rose Gold",
//     laptop_price: 2274.54,
//     laptop_release_date: "10/22/2018",
//   },
//   {
//     id: 7,
//     ip_address: "1.146.177.119",
//     phone_brand: "Samsung",
//     phone_model: "OnePlus 9",
//     phone_color: "Red",
//     phone_price: 947.5,
//     phone_release_date: "3/13/2019",
//     laptop_brand: "Lenovo",
//     laptop_model: "ThinkPad X1",
//     laptop_color: "Silver",
//     laptop_price: 2764.15,
//     laptop_release_date: "1/14/2017",
//   },
//   {
//     id: 8,
//     ip_address: "200.162.26.207",
//     phone_brand: "Google",
//     phone_model: "Galaxy S21",
//     phone_color: "Blue",
//     phone_price: 1504.87,
//     phone_release_date: "4/19/2017",
//     laptop_brand: "HP",
//     laptop_model: "Spectre x360",
//     laptop_color: "Black",
//     laptop_price: 1750.6,
//     laptop_release_date: "1/13/2016",
//   },
//   {
//     id: 9,
//     ip_address: "165.86.62.97",
//     phone_brand: "Apple",
//     phone_model: "Galaxy S21",
//     phone_color: "Red",
//     phone_price: 388.62,
//     phone_release_date: "12/4/2016",
//     laptop_brand: "Asus",
//     laptop_model: "ZenBook",
//     laptop_color: "Gray",
//     laptop_price: 1149.55,
//     laptop_release_date: "6/20/2018",
//   },
//   {
//     id: 10,
//     ip_address: "210.178.97.137",
//     phone_brand: "Huawei",
//     phone_model: "Galaxy S21",
//     phone_color: "Red",
//     phone_price: 1235.94,
//     phone_release_date: "12/13/2010",
//     laptop_brand: "Dell",
//     laptop_model: "ZenBook",
//     laptop_color: "Blue",
//     laptop_price: 620.24,
//     laptop_release_date: "7/6/2018",
//   },
// ];






  return (
    <div className="hcontainer">
      <Nav1 />
      <Scomp />
      <h4 className="sellers">BEST SELLERS</h4>
      <div className="cart-item"> 
        {Products.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.name} className="cartimg" />
          </div>
        ))}
      </div>
      <Footer1/>
      <Foot/>
    </div>
  );
};
export default Home1;
