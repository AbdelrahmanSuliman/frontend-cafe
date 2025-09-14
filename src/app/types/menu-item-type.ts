export type MenuItemType = {
  itemImage: string;
  title: string;
  description?: string;
  price: number;
  roastCategory: "darkRoast" | "espresso" | "lightRoast" | "mediumRoast";
  backgroundColor?: string;
  featured?: boolean;
  slug: string
};
