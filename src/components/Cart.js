import CartProduct from "./CartProduct";

import "./Cart.css";

function Cart({ products, totalPrice, removeFromCart, setProductQuantity }) {
  return (
    <div className="Cart">
      <div className="Cart__content">
        {products.length > 0 ? (
          products.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          ))
        ) : (
          <p className="Cart__textnotice">The cart is empty</p>
        )}
      </div>
      <footer className="Cart__footer">Total: €{totalPrice}</footer>
    </div>
  );
}

export default Cart;
