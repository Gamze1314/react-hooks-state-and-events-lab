import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("All");
// items are changing, can it be state ?


  const filtered = items.filter((item) => {

   return  selectedCategory === "All" ? true : item.category === selectedCategory;
  });


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => setSelectedCategory(e.target.value)} name="filter">
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
