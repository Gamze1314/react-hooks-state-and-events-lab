import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCart() {
    setInCart(!inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

// onClick event on the button tag
// handleClick function will update the state of the variable 
// isAdded ? 
// text => isAdded ? "Remove from Cart" : "Add to Cart" 
