import Header from "./components/Header";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";

import "./App.css";

const fakeProducts = require("./mocks/data/products.json");

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo: "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};

function App() {
  return (
    <div className="App">
      <Header logo={data.logo} name="Edgemony_logo" />
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
        alt="Company_img"
      />
      <ListItems products={data.products} />
    </div>
  );
}

export default App;
