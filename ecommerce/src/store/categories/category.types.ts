export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}

/**
 * Individual Category Item.
 */
export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

/**
 * Original Category Data.
 */
export type Category = {
  title: string;
  imageUrl: string; // x
  items: CategoryItem[];
};

/**
 * This is the high level view of Categories that is used
 * when reducing over the original data.
 */
export type CategoryMap = {
  [key: string]: CategoryItem[];
};
