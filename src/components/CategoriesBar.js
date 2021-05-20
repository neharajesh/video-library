import axios from "axios";
import { useEffect, useState } from "react";
import { ROOT_URL } from "../config";
import "../styles.css";

export const CategoriesBar = () => {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/categories`);
      console.log(response.data.receivedData);
      setCategories(response.data.receivedData);
    } catch (err) {
      console.log("Error occurred retrieving categories");
    }
  };
  useEffect(() => {
      getAllCategories();
  }, [setCategories]);

  const [activeElement, setActiveElement] = useState("All");
  const activeElementHandler = (value) => {
    setActiveElement(value);
  };
  return (
    <>
      <div className="container container-categories">
        <span
          className={
            activeElement === "All"
              ? "category category-active"
              : "category"
          }
          onClick={() => activeElementHandler("All")}
        >
          All
        </span>
        {categories.map((category) => (
          <span
            className={
              activeElement === category.name
                ? "category category-active"
                : "category"
            }
            key={category._id}
            onClick={() => activeElementHandler(category.name)}
          >
            <p>{category.name}</p>
          </span>
        ))}
      </div>
    </>
  );
};
