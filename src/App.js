import Header from "./components/Header";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import { useState, useEffect } from "react";

import "./App.css";

// const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  // products: fakeProducts,
};

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [retry, setRetry] = useState(false);
  const [input, setInput] = useState("");

  function search(e) {
    const target = e.target.value;
    setInput(target);
  }

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
      <Header logo={data.logo} name="Edgemony_logo" />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
        alt="Company_img"
      />
      <input
        onChange={search}
        id="search"
        type="text"
        placeholder="Search..."
      />
      {!isLoading ? (
        <ListItems products={products} input={input} />
      ) : (
        <Loading />
      )}
      {isError && <Error retry={retry} setRetry={setRetry} />}
    </div>
  );
}

export default App;
