import Product from "./Product";

import "./ListItems.css";

function ListItems({ products, input, setCart }) {
  return (
    <div className="products-container">
      {products
        .filter((product) => product.title.toUpperCase().includes(input.toUpperCase()))
        .map((product) => {
          return <li key={product.id}>{<Product product={product} setCart={setCart} />}</li>;
        })}
    </div>
  );
}

export default ListItems;
