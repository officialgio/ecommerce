import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  // Initial state must be set to the param endpoint
  // Ex: /hats => categoriesMap[shoes]
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    // Set products only for the specific category from
    // the specified param endpoint if there's changes to the data
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle> {category.toUpperCase()} </CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
