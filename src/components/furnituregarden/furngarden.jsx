import Foot from "../footer/footer";
import Footer1 from "../footer/footer1";
import Footlong from "../footer/footl2";
import Nav from "../nav1/nav1";
import "./furngarden.css";
import {useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TbSquareRoundedLetterI } from "react-icons/tb";

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
  ];
  // city modal
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  // neigbourhoods modal
  const [neighbourmodalOpen, setneighbourmodalOpen] = useState(false);

  const showneighbourmodal = () => {
    setneighbourmodalOpen(true);
  };

  const closeneighbourmodal = () => {
    setneighbourmodalOpen(false);
  };

  // filter button modal
  const [filtermodalOpen, setfiltermodalOpen] = useState(false);

  const showfiltermodal = () => {
    setfiltermodalOpen(true);
  };

  const closefiltermodal = () => {
    setfiltermodalOpen(false);
  };

  
    // price filter
    const [isPModalOpen, setIsPModalOpen] = useState(false);
    const [from, setFrom] = useState("");
    const [upto, setUpto] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [isPFiltered, setIsPFiltered] = useState(false);

    

    const openPModal = () => setIsPModalOpen(true);
    const closePModal = () => setIsPModalOpen(false);
    const clearFields = () => {
      setFrom("");
      setUpto("");
      setFilteredData([]);
      setIsPFiltered(false);
    };

    const applyPFilter = () => {
      const filtered = products.filter((item) => {
        console.log(item.price);
        const itemPrice = item.price;
        //  const fromValue = from ? parseInt(from) : 0;
        //  const uptoValue = upto ? parseInt(upto) : Infinity;
        return itemPrice >= parseInt(from) && itemPrice <= parseInt(upto);
      });
      setFilteredData(filtered);
      setIsPFiltered(true);
      closePModal();
    };

    console.log(filteredData);

    const fetchFG = async () => {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos/?query=Furniture&client_id=${accessToken}`
      );
      if (res.status === 200) {
        const cleanedFG = res.data.results.map((item) => ({
          big_size: item.urls.full,
          small_size: item.urls.small,
          price: Math.floor(Math.random() * 10000) + 100,
          descriptive_name: `Item ${Math.floor(Math.random() * 100)}`,
          category: `Category ${Math.floor(Math.random() * 10)}`,
          age: `${Math.floor(Math.random() * 5) + 1} years`,
          usage: `${Math.floor(Math.random() * 50) + 10}GB`,
          condition: Math.random() > 0.5 ? "New" : "Used",
          location: "Nigeria",
          date: `2023-${Math.floor(Math.random() * 12) + 1}-${
            Math.floor(Math.random() * 28) + 1
          }`,
        }));
        setProducts(cleanedFG);
        localStorage.setItem("furniture", JSON.stringify(cleanedFG));
        console.log(cleanedFG);
      }
    };

    // const applyPFilter = () => {
    //   const filtered = combinedData.filter((item) => {
    //     const itemPrice = item.price;
    //     const fromValue = from ? parseInt(from, 10) : 0;
    //     const uptoValue = upto ? parseInt(upto, 10) : Infinity;
    //     return itemPrice >= fromValue && itemPrice <= uptoValue;
    //   });
    //   setFilteredData(filtered);
    //   setIsPFiltered(true);
    //   closePModal();
    // };

    // const fetchFG = async () => {
    //   const res = await axios.get(
    //     `https://api.unsplash.com/search/photos/?query=Furniture&client_id=${accessToken}`
    //   );
    //   if (res.status === 200) {
    //     const cleanedFG = res.data.results.map((item) => ({
    //       big_size: item.urls.full,
    //       small_size: item.urls.small,
    //     }));
    //     setProducts(cleanedFG);
    //     localStorage.setItem(
    //       "furniture",
    //       JSON.stringify(cleanedFG)
    //     );
    //   }
    // };

    // const smallSizeFG = products.map((ip) => ip.small_size);

    // const combinedData = fg_data.map((combo, index) => ({
    //   ...combo,
    //   image: smallSizeFG[index],
    // }));

    useEffect(() => {
      // const savedFG = localStorage.getItem("furniture");
      // if (savedFG) {
      //   setProducts(JSON.parse(savedFG));
      // } else {
      fetchFG();
      // }
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
                <IoIosArrowDown className="FG-arrowdown" onClick={showModal} />
              </p>

              {modalOpen && (
                <div id="myModal" className="modal" onClick={closeModal}>
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="close" onClick={closeModal}>
                      &times;
                    </span>
                    <div className="div-city-modal">
                      <p className="city-modal">
                        <a href="#cars">Nigeria</a>
                      </p>
                      <p className="city-modal">
                        <a href="#motorcycles">All cities</a>
                      </p>
                      <p className="city-modal">
                        <a href="#heavy-vehicles">Abuja</a>
                      </p>
                      <p className="city-modal">
                        <a href="#heavy-vehicles">Lagos</a>
                      </p>
                      <p className="city-modal">
                        <a href="#heavy-vehicles">Akwa-ibom</a>
                      </p>
                      <p className="city-modal">
                        <a href="#heavy-vehicles">Port-harcourt</a>
                      </p>
                    </div>
                    <button className="apply-filters">Apply Filters</button>
                  </div>
                </div>
              )}
            </div>
            <hr className="hrdiv"></hr>
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
                <IoIosArrowDown
                  className="FG-arrowdown"
                  onClick={showneighbourmodal}
                />
              </p>
            </div>
            {neighbourmodalOpen && (
              <div
                id="myModal"
                className="Nmodal"
                onClick={closeneighbourmodal}
              >
                <div
                  className="Nmodal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="close" onClick={closeneighbourmodal}>
                    &times;
                  </span>
                  <div className="div-city-Nmodal">
                    <p className="city-Nmodal">
                      <a href="#cars">All Neighbourhood</a>
                    </p>
                    <p className="city-Nmodal">
                      <a href="#motorcycles">Residence</a>
                    </p>
                    <p className="city-Nmodal">
                      <a href="#heavy-vehicles">Villa compound</a>
                    </p>
                    <p className="city-Nmodal">
                      <a href="#heavy-vehicles">Estate</a>
                    </p>
                    <p className="city-Nmodal">
                      <a href="#heavy-vehicles">Airport road area</a>
                    </p>
                    <p className="city-Nmodal">
                      <a href="#heavy-vehicles">AG Crescent</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* </div> */}
            <hr></hr>
            {/* <p className="FG-parent-d1-p">
            <strong>Price (NAIRA)</strong> <br /> Search
            <IoIosArrowDown className="FG-arrowdown" onClick={openPModal} />
          </p> */}
            <div className="FG-price-d1">
              <p className="FG-price-d1-p">
                <p>
                  <strong>Price (NAIRA)</strong> <br /> Search
                </p>
                <IoIosArrowDown className="price-down" onClick={openPModal} />
              </p>

              {isPModalOpen && (
                <div className="Pmodal">
                  <div className="Pmodal-content">
                    <IoMdClose onClick={closePModal} className="priceClose" />
                    <div className="Pcontent">
                      <div>
                        <label className="contentLabel">From</label>
                        <input
                          type="number"
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="contentLabel">Upto </label>
                        <input
                          type="number"
                          value={upto}
                          onChange={(e) => setUpto(e.target.value)}
                          placeholder="Any"
                        />
                      </div>
                    </div>
                    <div className="Pmodal-buttons">
                      <button className="prClear" onClick={clearFields}>
                        Clear
                      </button>
                      <button className="prFilter" onClick={applyPFilter}>
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="div-price-filter">
                {/* <h3>
                  {isPFiltered === true ? "Filtered Results:" : "All Results:"}
                </h3> */}
                {/* <div>
                {(isPFiltered ? filteredData : products).map((item) => (
                  <div key={item.id} className="phone_row">
                    <div className="ph-img-div">
                      <img
                        className="phone-image"
                        src={item.small_size}
                        alt={item.name}
                      />
                    </div>
                    <div className="phone-ph"> 
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
              </div> */}
              </div>
            </div>
            <hr></hr>
            {/* <div className="FG-parent-d1">
            <p className="FG-parent-d1-p">
              <strong>Filters</strong> <br /> Category, Age, etc
            </p>
          </div> */}
            <div className="FG-parent-d1-filter">
              <div className="mobfilter">
                <p className="FG-parent-d5-p">
                  <strong>Filters</strong> <br />
                  Category, Age, etc
                  <IoIosArrowDown
                    className="FG-arrowdown"
                    onClick={showfiltermodal}
                  />
                </p>
              </div>
              {filtermodalOpen && (
                <div
                  id="myModal"
                  className="filter-modal"
                  onClick={closefiltermodal}
                >
                  <div
                    className="filter-modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* <span className="close" onClick={closefiltermodal}>
                      &times;
                    </span> */}
                    <div className="filter-inner-div">
                      <strong>Category</strong>
                      <IoMdClose className="close" onClick={closefiltermodal} />
                      <input
                        type="text"
                        placeholder="search"
                        // value={input}
                        // onChange={handleInputChange}
                        className="filter-inp"
                      />
                      <CiSearch className="search-filter-icon" />
                    </div>
                    <div className="age-div">
                      <strong>Age</strong>
                      <div className="ad-flex1">
                        <a href="">Brand New</a>
                        <a href="">0-1 month</a>
                        <a href="">1-6 months</a>
                      </div>
                      <div className="ad-flex1">
                        <a href="">6-12 Months</a>
                        <a href="">1-2 Years</a>
                        <a id="filter-viewmore" href="">
                          View More
                        </a>
                      </div>
                    </div>

                    <div className="age-div">
                      <strong>Usage</strong>
                      <div className="ad-flex1">
                        <a href="">Never Used</a>
                        <a href="">Used Once</a>
                        <a href="">Light Usage</a>
                      </div>
                      <div className="ad-flex1">
                        <a href="">Normal Usage</a>
                        <a href="">Heavy Usage</a>
                      </div>
                    </div>

                    <div className="age-div">
                      <strong>Condition</strong>
                      <div className="ad-flex1">
                        <a href="">Flawless</a>
                        <a href="">Excellent</a>
                        <a href="">Good</a>
                      </div>
                      <div className="ad-flex1">
                        <a href="">Average</a>
                        <a href="">Poor</a>
                      </div>
                    </div>
                    <div className="age-div">
                      <strong>Ads Posted</strong>
                      <div className="ad-flex1">
                        <a href="">Today</a>
                        <a href="">Within 3 days</a>
                        <a href="">Within 1 week</a>
                      </div>
                      <div className="ad-flex1">
                        <a href="">Within 2 week</a>
                        <a href="">Within 1 Month</a>
                      </div>
                      <div className="fvm2-div">
                        <a id="filter-viewmore2" href="">
                          View More
                        </a>
                      </div>
                    </div>
                    <div className="age-div">
                      <strong>Nearby Listing</strong>

                      <TbSquareRoundedLetterI id="round" />
                    </div>
                    <div className="age-div">
                      <strong>Other Filters</strong>
                      <div className="filter-check-div">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="checkbox1"
                        />
                        <p>Show ads in English only</p>
                      </div>
                      <div className="filter-check-div">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="checkbox1"
                        />
                        <p>Show ads with photos only</p>
                      </div>
                      <div className="filter-check-div">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="checkbox1"
                        />
                        <p>Show ads by verified users</p>
                      </div>
                      <div className="Pmodal-buttons2">
                        <button className="prClear" onClick={clearFields}>
                          Clear
                        </button>
                        <button className="prFilter" onClick={applyPFilter}>
                          Apply Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              {(isPFiltered ? filteredData : products).map((item, index) => (
                <div key={index} className="phone_row">
                  <div className="FG-img-div">
                    <img
                      className="FG-image"
                      src={item.small_size}
                      alt={item.name}
                    />
                  </div>

                  <div className="phone-ph">
                    {/* <p className="pcolor">{item.name}</p> */}
                    <div className="premium-div">
                      <h3 className="pname">{item.descriptive_name}</h3>
                      <h5 className="premium">premium</h5>
                    </div>
                    <div className="catprice">
                      <p>{item.category}</p>
                      <h3 className="pname">N{item.price}</h3>
                    </div>
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