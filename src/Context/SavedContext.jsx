import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "https://aguero.pythonanywhere.com";

const SavedContext = createContext();

function SavedProvider({ children }) {
  const token = localStorage.getItem("token");
  let config = null;

  if (token) {
    config = {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json", // Specify Content-Type header
      },
    };
  } else {
    console.error("Token not found in localStorage");
  }

  const getproducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/0/save`, config);
      console.log("res", response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const saveProduct = async (product) => {
    console.log("product.id", product.id);
    try {
      console.log(config);
      const res = await axios.post(
        `https://aguero.pythonanywhere.com/product/${product.id}/save/`,
        {},
        config
      );
      alert("Product uploaded successfully");
      console.log("uploaded:", res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SavedContext.Provider
      value={{
        getproducts,
        saveProduct,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

function useSaved() {
  const context = useContext(SavedContext);
  if (context === undefined)
    throw new Error("SavedContext used outside provider");
  return context;
}

export { SavedProvider, useSaved };
