import React, { useState } from "react";
import { useItems } from "../hooks/useItems";
import { useAddItem } from "../hooks/useAddItem";
import { Form } from "../components/molecules/Form";
import { ItemList } from "../components/organisms/ItemList";
import { Item } from "../types/Item";

export const Home: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const handleAddItem = (data: { title: string; body: string }) => {
    mutation.mutate(data, {
      onSuccess: (newItem) => {
        setCurrentItems([newItem]); // Mostrar solo el nuevo ítem
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <Form onSubmit={handleAddItem} />
      <h2 className="text-xl font-bold mt-6">Items List</h2>
      <ItemList items={currentItems} />
    </div>
  );
};
