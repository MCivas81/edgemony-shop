import Product from "./Product";

import "./ListItems.css";

function ListItems({ products, input, openProductModal }) {
  return (
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
  );
}

export default ListItems;
