import Hero from "./../components/Hero";
import ListItems from "./../components/ListItems";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

function Home({ products }) {
  return (
    <div>
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
        alt="Company_img"
      />
      <ListItems products={products} />
    </div>
  );
}

export default Home;
