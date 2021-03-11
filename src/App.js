import Header from "./components/Header";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import ModalProduct from "./components/ModalProduct";
import ModalCart from "./components/ModalCart";
import { useState, useEffect } from "react";

import "./App.css";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo: "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  // Modal logic
  const [modalIsShown, setModalIsShown] = useState(false);
  const [productInModal, setProductInModal] = useState(null);
  const [isCartOpen, setCartOpen] = useState(false);

  function openProductModal(product) {
    setProductInModal(product);
    setModalIsShown(true);
  }

  function closeProductModal() {
    setModalIsShown(false);
    setProductInModal(null);
  }

  useEffect(() => {
    if (modalIsShown || isCartOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [modalIsShown, isCartOpen]);

  // API data logic
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [retry]);

  // Cart logic
  const [cart, setCart] = useState([]);
  const cartProducts = cart.map((cartItem) => {
    const { price, image, title, id } = products.find((p) => p.id === cartItem.id);
    return { price, image, title, id, quantity: cartItem.quantity };
  });
  const cartTotal = cartProducts
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  function addToCart(productId) {
    setCart([...cart, { id: productId, quantity: 1 }]);
  }
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }
  function setProductQuantity(productId, quantity) {
    setCart(cart.map((product) => (product.id === productId ? { ...product, quantity } : product)));
  }

  return (
    <div className="App">
      <Header
        logo={data.logo}
        name="Edgemony_logo"
        cartSize={cart.length}
        cartTotal={cartTotal}
        onCartClick={() => setCartOpen(true)}
      />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
        alt="Company_img"
      />
      {!isLoading ? (
        <ListItems products={products} openProductModal={openProductModal} />
      ) : (
        <Loading />
      )}
      {isError && <Error retry={retry} setRetry={setRetry} />}
      <ModalCart
        products={cartProducts}
        isOpen={isCartOpen}
        close={() => setCartOpen(false)}
        totalPrice={cartTotal}
        removeFromCart={removeFromCart}
        setProductQuantity={setProductQuantity}
      />
      <ModalProduct
        isOpen={modalIsShown}
        product={productInModal}
        closeModal={closeProductModal}
        inCart={isInCart(productInModal)}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
