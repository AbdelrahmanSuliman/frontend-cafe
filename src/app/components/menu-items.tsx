"use client";

import Image from "next/image";
import { MenuItemType } from "../types/menu-item-type";
import { useState } from "react";

export default function MenuItem({
  itemImage,
  title,
  description,
  price,
  roastCategory,
  backgroundColor,
  slug
}: MenuItemType) {
  const [hovered, setHovered] = useState(false);
  const [reviewCount] = useState(
    Math.floor(Math.random() * (800 - 500 + 1)) + 500
  );

  return (
    <div className="menu-item flex-col overflow-hidden shadow-md w-100 bg-white rounded-sm">
      <div className="w-full h-[350px] relative hover:cursor-pointer transition duration-300 ease-in">
        <Image
          src={itemImage}
          alt="Menu Item"
          fill
          className="object-contain rounded-t-sm transition duration-300"
          style={{
            backgroundColor: hovered
              ? backgroundColor || "transparent"
              : "transparent",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>
      <div className="flex flex-col pl-6 pr-6 pt-4 pb-6 gap-3 h-[400px]">
        <h2 className="text-2xl text-gray-500">{roastCategory}</h2>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-row gap-2 pt-2">
          <div className="rating">
            <div
              className="mask mask-star bg-orange-400"
              aria-label="1 star"
            ></div>
            <div
              className="mask mask-star bg-orange-400"
              aria-label="2 star"
            ></div>
            <div
              className="mask mask-star bg-orange-400"
              aria-label="3 star"
            ></div>
            <div
              className="mask mask-star bg-orange-400"
              aria-label="4 star"
            ></div>
            <div
              className="mask mask-star bg-orange-400"
              aria-label="5 star"
              aria-current="true"
            ></div>
          </div>
          <p>{reviewCount} reviews</p>
        </div>
        <div className="flex flex-col gap-1 text-xl font-bold pt-6 border-t mt-4">
          <h1 className="text-gray-500 text-base">From</h1>
          <h1>${price}</h1>
        </div>
      </div>
    </div>
  );
}
