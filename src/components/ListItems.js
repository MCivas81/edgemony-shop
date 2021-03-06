import Product from "./Product";

import "./ListItems.css";

function ListItems({ products, input }) {
  return (
    <div className="products-container">
      {products
        .filter((product) =>
          product.title.toUpperCase().includes(input.toUpperCase())
        )
        .map((product) => {
          return (
            <li key={product.id}>
              {
                <Product
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
              }
            </li>
          );
        })}
    </div>
  );
}

export default ListItems;
