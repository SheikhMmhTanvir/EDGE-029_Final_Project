import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
