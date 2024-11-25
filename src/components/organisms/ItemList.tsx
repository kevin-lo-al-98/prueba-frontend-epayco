import React from 'react';
import { Item } from '../../types/Item';

interface ItemListProps {
  items: Item[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  if (items.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded mb-2">
          <h3 className="font-bold">{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};
