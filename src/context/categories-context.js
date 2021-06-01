import axios from "axios";
import { ROOT_URL } from "../config";

const { createContext, useState, useContext, useEffect } = require("react");

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [allCategories, setAllCategories] = useState([]);
    const [categories, setCategories] = useState("");

    const getAllCategories = async () => {
        try {
          const response = await axios.get(`${ROOT_URL}/categories`);
          if (response.data.success) {
            setAllCategories(response.data.receivedData);
          } else console.log("categories data not received", response.data.errMessage);
        } catch (err) {
          console.log("Error occurred retrieving categories");
        }
      };
      useEffect(() => {
        getAllCategories();
      }, [setAllCategories]);

    return (<>
        <CategoriesContext.Provider value={{ allCategories, setAllCategories, categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    </>)
}

export const useCategories = () => {
    return useContext(CategoriesContext)
}