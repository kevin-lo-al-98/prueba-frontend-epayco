import React from "react";
import { ItemListProps } from "../../types/ItemList.types";

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  if (items.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded bg-gray-50 shadow-sm">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="text-gray-700">{item.body}</p>
        </div>
      ))}
    </div>
  );
};
