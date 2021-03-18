import Product from "./pages/Product";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
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

let cache;

function App() {
  // API data logic
  const [products, setProducts] = useState(cache ? cache.products : []);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    if (cache !== undefined) {
      return;
    }
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
        cache = { products };
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [retry]);

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

        <Switch>
          <Route exact path="/">
            {isLoading ? (
              <Loading />
            ) : isError ? (
              <Error retry={retry} setRetry={setRetry} />
            ) : (
              <Home products={products} isLoading={isLoading} />
            )}
          </Route>
          <Route path="/product/:productId">
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
            />
          </Route>
          <Route path="/cart">
            <Cart
              products={cart}
              totalPrice={cartTotal}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
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
