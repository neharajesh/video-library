import { useState } from "react";
import "../styles.css";

const categories = [
    "All", "Cats", "Dogs", "Sheep", "Llama", "Goats", "Cows", "Elephants", "Penguins", "Dolphins", "Whales", "Megalodons"
]

export const CategoriesBar = () => {
    const [ activeElement, setActiveElement ] = useState("All");

    const activeElementHandler = (value) => {
        setActiveElement(value);
    }
    return (
        <>
            <div className="container container-categories">
                {categories.map((value, index) => 
                <span className={activeElement === value ? "category category-active" : "category"}
                    key={index}
                    onClick={() => activeElementHandler(value)}
                >
                    {value}
                </span>)}
            </div>
        </>
    )
}