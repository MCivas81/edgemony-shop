import CartProduct from "./CartProduct";

import "./ModalCart.css";

function ModalCart({ products, isOpen, close, totalPrice, removeFromCart, setProductQuantity }) {
  return (
    <div className={`ModalCart ${isOpen ? `is-open` : ""}`}>
      <div className="ModalCart__overlay" onClick={close}></div>
      <div className="ModalCart__body">
        <header>
          <button className="ModalCart__close" onClick={close}>
            X
          </button>
          <h2 className="ModalCart__title">Cart</h2>
        </header>
        <div className="ModalCart__content">
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
            <p className="ModalCart__content__empty">The cart is empty</p>
          )}
        </div>
        <footer>Total: €{totalPrice}</footer>
      </div>
    </div>
  );
}

export default ModalCart;
