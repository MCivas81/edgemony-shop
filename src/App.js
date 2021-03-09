import Header from "./components/Header";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import ModalProduct from "./components/ModalProduct";
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
  const [input, setInput] = useState("");

  // Cart logic
  const [cart, setCart] = useState([]);

  // Modal logic
  const [modalIsShown, setModalIsShown] = useState(false);
  const [productInModal, setProductInModal] = useState(null);

  function openProductModal(product) {
    setProductInModal(product);
    setModalIsShown(true);
  }

  function closeProductModal() {
    setModalIsShown(false);
    setProductInModal(null);
  }

  useEffect(() => {
    if (modalIsShown) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [modalIsShown]);

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

  return (
    <div className="App">
      <Header logo={data.logo} name="Edgemony_logo" cart={cart} />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
        alt="Company_img"
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        id="searchBar"
        type="text"
        placeholder="Search..."
      />
      {!isLoading ? (
        <ListItems products={products} input={input} openProductModal={openProductModal} />
      ) : (
        <Loading />
      )}
      {isError && <Error retry={retry} setRetry={setRetry} />}
      <ModalProduct
        isOpen={modalIsShown}
        closeModal={closeProductModal}
        product={productInModal}
        setCart={setCart}
        cart={cart}
      />
    </div>
  );
}

export default App;
