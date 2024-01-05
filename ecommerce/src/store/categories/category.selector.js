/**
 * Reduce over the categoriesArray
 * Ex: {items: Array[9], title: "Hats"}
 *
 * And reduce the array to
 * Ex: { hats: Array[{price: N, ..}, {...}, {...}] }
 *
 * @param {Object} state
 * @returns our desirable data object
 */
export const selectCategoriesMap = (state) => {
  const categoriesMap = state.categories.categories.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  console.log(categoriesMap);
  return categoriesMap;
};
