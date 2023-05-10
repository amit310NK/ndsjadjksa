import React from "react";
import { useState, useEffect } from "react";
import "../ProductListingPage/products.css";
import { MdTune } from "react-icons/md";
import { brands, Category, priceRanges } from "../../Utils/filter";
import { Dropdown } from "react-bootstrap";
import products from "../../Utils/products.json";

import "../Header/header.css";
import { FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { GrSort } from "react-icons/gr";

export const ProductListing = () => {
  const [filterdData, setFilteredData] = useState(products);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.tittle.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    console.log("filteredDAta", filtered);
    setSearchTerm(query);
    console.log("query", query);
  };

  // Brand Filter
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.value;
    const selectedBrandsCopy = [...selectedBrands];
    if (event.target.checked) {
      selectedBrandsCopy.push(brand);
    } else {
      const index = selectedBrandsCopy.indexOf(brand);
      selectedBrandsCopy.splice(index, 1);
    }
    setSelectedBrands(selectedBrandsCopy);

    if (selectedBrandsCopy.length === 0) {
      setFilteredData(products);
    } else {
      const filtered = products.filter((product) => {
        return selectedBrandsCopy.includes(product.brand);
      });
      setFilteredData(filtered);
      console.log("brand", filtered);
    }
  };

  // CategoryFilter
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    const selectedCategoryCopy = [...selectedCategory];
    if (event.target.checked) {
      selectedCategoryCopy.push(category);
    } else {
      const index = selectedCategoryCopy.indexOf(category);
      selectedCategoryCopy.splice(index, 1);
    }
    setSelectedCategory(selectedCategoryCopy);

    if (selectedCategoryCopy.length === 0) {
      setFilteredData(products);
    } else {
      const filtered = products.filter((product) => {
        return selectedCategoryCopy.includes(product.category);
      });
      setFilteredData(filtered);
      console.log("category", filtered);
    }
  };

  // price Filter

  // const filteredProducts = products.filter(product =>
  //   product.ActualPrice >= priceRange.min && product.ActualPrice <= priceRange.max
  // );
  // setFilteredData(filteredProducts)

  const handlePriceRangeChange = (index: number) => {
    const isSelected = selectedPriceRanges.includes(index);

    if (isSelected) {
      const newSelectedPriceRanges = selectedPriceRanges.filter(
        (range) => range !== index
      );
      setSelectedPriceRanges(newSelectedPriceRanges);
    } else {
      const newSelectedPriceRanges = [...selectedPriceRanges, index];
      setSelectedPriceRanges(newSelectedPriceRanges);
    }
  };

  useEffect(() => {
    if (selectedPriceRanges.length === 0) {
      setFilteredData(products);
      return;
    }

    const filtered = products.filter((product) => {
      return selectedPriceRanges.some((rangeIndex) => {
        const range = priceRanges[rangeIndex];
        // console.log("priceRange" , range )
        return (
          product.currentPrice >= range.min && product.currentPrice <= range.max
        );
      });
    });

    setFilteredData(filtered);

    // console.log("filteredPrice" , filtered)
  }, [selectedPriceRanges]);

  // sorting filter

  const lowTohigh = () => {
    const sorted = [...filterdData].sort(
      (a, b) => a.currentPrice - b.currentPrice
    );
    setFilteredData(sorted);
    // console.log(sorted)
  };

  const highTolow = () => {
    const sorted = [...filterdData].sort(
      (a, b) => b.currentPrice - a.currentPrice
    );
    setFilteredData(sorted);
    // console.log(sorted)
  };

  return (
    <>
      <div className="header mt-1">
        <div className="container d-flex justify-content-between">
          <div className="logo d-flex align-items-center justify-content-start">
            <img
              src="https://www.sail-world.com/photos/sailworld/photos/Large_W2N%20Logo1.jpg"
              alt=""
            />
          </div>
          <div className="navbar d-flex justify-content-around">
            <div className="searchBar d-flex align-items-center ">
              <input
                className="py-2 px-2 searchBox"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              ></input>
              <div className="searchIcon">
                <button>
                  <FiSearch />
                </button>
              </div>
            </div>

            <div className="category">
              <button className="category-btn">
                <GrSort size={22} /> Categories
              </button>
            </div>
            <button className="notification">
              <BsBellFill size={20} />
            </button>
            <div className="display-picture">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx28eg8MPTOsu5VrRK3mBgm2NNvO8qCgjXQUCz5Fd75Q&usqp=CAU&ec=48665698"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2 py-2 d-flex justify-content-between ">
        <div className="filters bg-white">
          <div className="box d-flex justify-content-center align-items-center">
            <div className="filter-container d-flex jutsify-content-center align-items-center justify-content-between my-2">
              <span style={{ fontSize: "20px", fontWeight: "500" }}>
                Filters
              </span>
              <span id="filterIcon">
                <MdTune size={25} />
              </span>
            </div>
          </div>
          <div className="box d-flex justify-content-center align-items-center">
            <div className="filter-container d-flex flex-column align-items-start ">
              <span style={{ fontSize: "15px", fontWeight: "500" }}>Brand</span>

              {brands.map((item, pos) => {
                return (
                  <div
                    key={pos}
                    className="d-flex justify-content-between my-1"
                  >
                    <input
                      type="checkbox"
                      name={item.name}
                      id={item.id}
                      value={item.id}
                      checked={selectedBrands.includes(item.id)}
                      onChange={handleBrandChange}
                    />
                    <label
                      htmlFor={item.htmlFor}
                      style={{ marginLeft: "10px" }}
                    >
                      <span style={{ fontSize: "14px" }}> {item.label}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="box d-flex justify-content-center align-items-center">
            <div className="filter-container d-flex flex-column align-items-start">
              <span style={{ fontSize: "15px", fontWeight: "500" }}>
                Category
              </span>

              {Category.map((item, pos) => {
                return (
                  <div
                    key={pos}
                    className="d-flex justify-content-between my-1"
                  >
                    <input
                      type="checkbox"
                      name={item.name}
                      id={item.id}
                      value={item.id}
                      checked={selectedCategory.includes(item.id)}
                      onChange={handleCategoryChange}
                    />
                    <label
                      htmlFor={item.htmlFor}
                      style={{ marginLeft: "10px" }}
                    >
                      <span style={{ fontSize: "14px" }}> {item.label}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-2 d-flex justify-content-center align-items-center">
            <div className="filter-container d-flex flex-column align-items-start">
              <span style={{ fontSize: "15px", fontWeight: "500" }}>Price</span>

              {priceRanges.map((item, index) => {
                return (
                  <div className="d-flex justify-content-between my-1">
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="checkbox"
                        // name={item.name}
                        // id={item.id}
                        // value={item.min}
                        checked={selectedPriceRanges.includes(index)}
                        onChange={() => handlePriceRangeChange(index)}
                      />
                      <span style={{ fontSize: "14px" }}>
                        ${item.min} - ${item.max}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="listing-area">
          <div className="listing-header">
            <span style={{ color: "grey" }}>
              Home / Decoration / Artificial
            </span>

            {/* <div className="dropdown">
            <button className="drpdwn-btn" onClick={()=>{
              setDropdown(!dropdown);
            }} >
              Sort by <AiFillCaretDown /> 
            </button>
            {dropdown ? (
              <div className="drpdown-item">
                <ul className="drpdwn-list">
                  <li>A</li>
                  <li>B</li>
                </ul>
              </div>
            ) : null}
          </div> */}

            <Dropdown className="dropdown" style={{ width: "15%" }}>
              <Dropdown.Toggle id="dropdown-basic">Sort by</Dropdown.Toggle>

              <Dropdown.Menu style={{ border: "none" }}>
                <Dropdown.Item onClick={lowTohigh}>Low to high</Dropdown.Item>
                <Dropdown.Item onClick={highTolow}>High to low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="listing-items my-3">
            {filterdData.map((item, key) => {
              return (
                <div key={item.id} className="cards mb-4">
                  <div className="image">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                      }}
                      src={item.imgSrc}
                      alt=""
                    />
                  </div>
                  <div className="product-name px-2 my-1 text-start">
                    {item.tittle}
                  </div>
                  <div className="product-category px-3 mb-1 text-start">
                    {item.type}
                  </div>
                  <div className="rating px-3 text-start">
                    <span>
                      <img
                        className="bg-danger"
                        style={{ width: "25%" }}
                        src="https://thumbs.dreamstime.com/b/print-161109189.jpg"
                        alt=""
                      />
                    </span>
                    ({item.rating})
                  </div>
                  <div className="price my-1 px-3">
                    <span className="currentPrice">${item.currentPrice}</span>
                    {item.ActualPrice !== "" ? (
                      <>
                        <span className="actualPrice">
                          <s> ${item.ActualPrice} </s>
                        </span>
                        <span className="discount">{item.discount}%</span>
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
