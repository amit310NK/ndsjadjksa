import React from "react";  
import "./App.css";import { ProductListing } from "./Components/ProductListingPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="Listing">
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
