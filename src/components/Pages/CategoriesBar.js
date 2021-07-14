import { useCategories } from "../../context/categories-context";
import "../../styles.css";

export const CategoriesBar = () => {
  const { allCategories, categories, setCategories } = useCategories();

  return (
    <>
      <div className="container container-categories">
        <span
          className={categories === "All" ? "category category-active" : "category"}
          onClick={() => setCategories("All")}> All </span>
        {allCategories.map((category) => (
          <span
            className={
              categories === category.name
                ? "category category-active"
                : "category"
            }
            key={category._id}
            onClick={() => setCategories(category._id)}
          >
            <p>{category.name}</p>
          </span>
        ))}
      </div>
    </>
  );
};
