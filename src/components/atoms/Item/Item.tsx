import React from "react";
import { ItemProps } from "./Item.types";

export const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="border p-4 rounded bg-gray-50 shadow-sm">
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="text-gray-700">{item.body}</p>
    </div>
  );
};
