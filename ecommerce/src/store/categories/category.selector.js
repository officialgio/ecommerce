import { createSelector } from "reselect";

// Get categories from the store
const selectCategoryReducer = (state) => state.categories;

/**
 * The function will only run if the categoriesSlice object we get back from
 * the selectCategoryReducer is different from the original.
 * @returns {Object} categories
 */
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

/**
 * Reduce over the categoriesArray
 * Ex: {items: Array[9], title: "Hats"}
 *
 * And reduce the array to
 * Ex: { hats: Array[{price: N, ..}, {...}, {...}] }
 *
 * Compose the function with selectCategories. This is a memoized selector.
 * As long as the categories Array from the selectCategories doesn't change, don't rerun the reducer.
 *
 */
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
