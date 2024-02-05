import React, { useState } from "react";

function Item({ name, category }) {
  const [ isInCart, setIsInCart] = useState(false);

  function handleCart() {
    setIsInCart(!isInCart);
  }
// update className => if true "in-cart" or nothing. / toggles
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={isInCart ? "remove" : "add"}>
        {isInCart ? "Remove" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

