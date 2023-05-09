import React, { useState } from "react";
import "../Header/header.css";
import { FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { GrSort } from "react-icons/gr";
import products from "../../Utils/products.json";

export const Header = () => {
  const [filterdData, setFilteredData] = useState(products);

  const [searchTerm, setSearchTerm] = useState("");
  const [showResult, setShowResult] = useState(false);

  function searchResult(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setSearchTerm(e.target.value);
    if (searchTerm.length > 1)  {
      setShowResult(true);
      console.log(searchTerm);
      const filteredProducts = products.filter((product) =>
        product.tittle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredProducts);
      console.log("filtersearch", filterdData);
    } else {
      setShowResult(false);
    }
  }

  return (
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
              onChange={searchResult}
            ></input>
            <div className="searchIcon">
              <button>
                <FiSearch />
              </button>
            </div>
          </div>
          {showResult ? (
            <div className="result bg-white">
              <ul style={{ padding: "0" }}>
                {filterdData.map((item, pos) => {
                  return <li className="searchList">{item.tittle}</li>;
                })}
              </ul>
            </div>
          ) : null}

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
  );
};
