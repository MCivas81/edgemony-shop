import Product from "./Product";

import "./ListItems.css";

function ListItems({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => {
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
