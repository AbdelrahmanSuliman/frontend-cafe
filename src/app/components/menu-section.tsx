"use client";

import { useState, useEffect } from "react";
import { client } from "../sanity/client";
import { MenuItemType } from "../types/menu-item-type";
import { MENU_ITEMS_QUERY } from "../sanity/queries";
import MenuItem from "./menu-items";

type Props = {
  featuredSection: boolean;
};

export default function MenuSection({ featuredSection }: Props) {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const items = await client.fetch<MenuItemType[]>(
          MENU_ITEMS_QUERY,
          {},
          { next: { revalidate: 30 } }
        );
        setMenuItems(featuredSection ? items.filter((i) => i.featured) : items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [featuredSection]);

  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 ">
      {menuItems.map((item) => (
        <MenuItem key={item.title} {...item} />
      ))}
    </div>
  );
}
