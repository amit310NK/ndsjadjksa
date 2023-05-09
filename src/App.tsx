import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { ProductListing } from "./Components/ProductListingPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Listing">
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
