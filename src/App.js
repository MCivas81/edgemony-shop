import Product from "./pages/Product";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ModalSidebar from "./components/ModalSidebar";
import { useState, useEffect } from "react";

import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function App() {
  // Modal logic
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [isCartOpen]);

  // Cart logic
  const [cart, setCart] = useState([]);

  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  function isInCart(product) {
    return product != null && cart.find((p) => p.id === product.id) != null;
  }
  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
  function removeFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }
  function setProductQuantity(productId, quantity) {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  }

  return (
    <Router>
      <div className="App">
        <Header
          logo={data.logo}
          name="Edgemony_logo"
          cartSize={cart.length}
          cartTotal={cartTotal}
          onCartClick={() => setCartOpen(true)}
        />

        <ModalSidebar
          isOpen={isCartOpen}
          close={() => setCartOpen(false)}
          titleSidebar="Cart">
          <Cart
            products={cart}
            totalPrice={cartTotal}
            removeFromCart={removeFromCart}
            setProductQuantity={setProductQuantity}
          />
        </ModalSidebar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:productId">
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
            />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
