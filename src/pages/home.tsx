import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="hjsfd"
          name="Canon 300D"
          price={333}
          stock={33}
          handler={addToCartHandler}
          photo="https://images.pexels.com/photos/4573828/pexels-photo-4573828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <ProductCard
          productId="Mackbook Pro 64TB"
          name="Mackbook Pro 64TB"
          price={333}
          stock={33}
          handler={addToCartHandler}
          photo="https://images.pexels.com/photos/16642872/pexels-photo-16642872/free-photo-of-macbook-air-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </main>
    </div>
  );
};

export default Home;
