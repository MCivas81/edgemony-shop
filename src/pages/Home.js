import { useState, useEffect } from "react";

import Hero from "./../components/Hero";
import ListItems from "./../components/ListItems";
import Loading from "./../components/Loading/Loading";
import Error from "./../components/Error/Error";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

let cache;

function Home() {
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

  return (
    <div>
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
        alt="Company_img"
      />
      {!isLoading ? <ListItems products={products} /> : <Loading />}
      {isError && <Error retry={retry} setRetry={setRetry} />}
    </div>
  );
}

export default Home;
