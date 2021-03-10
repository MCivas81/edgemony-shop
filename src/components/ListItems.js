import { useState } from "react";

import Product from "./Product";

import "./ListItems.css";

function ListItems({ products, openProductModal }) {
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <input
        onChange={(e) => setInput(e.target.value)}
        id="searchBar"
        type="text"
        placeholder="Search..."
      />
      <div className="products-container">
        {products
          .filter((product) => product.title.toUpperCase().includes(input.toUpperCase()))
          .map((product) => {
            return (
              <li key={product.id}>
                {<Product product={product} openProductModal={() => openProductModal(product)} />}
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default ListItems;
