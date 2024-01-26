import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <div className="container">
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
            name="iPhone 15 Pro 256GB Blue"
            price={150500}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-pro/blue-titanium/iphone-15-pro-titanium-blue-01-500x500.webp"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Xtrike Me GH-510 RGB"
            price={3330}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/headset/xtrike-me/gh-510/gh-510-01-500x500.webp"
          />

          <ProductCard
            productId="Samsung Galaxy S22 Ultra"
            name="Samsung Galaxy S22 Ultra"
            price={175999}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s22-ultra/galaxy-s22-ultra-black-500x500.webp"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Jackhammer Pro Gaming Casing"
            price={11000}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/casing/revenger/jackhammer-pro/jackhammer-pro-01-500x500.webp"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Canon EOS 90D 32.5MP"
            price={155000}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/eos-90d/eos-90d-500x500.jpg"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="AORUS AGC310"
            price={25500}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/gaming-chair/gigabyte/aorus-agc310/aorus-agc310-1-500x500.jpg"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Fantech HG11 PRO Captain 7.1 "
            price={3200}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/headphone/fantech/hg11-pro/hg11-pro-01-500x500.jpg"
          />

          <ProductCard
            productId="hjsfd"
            name="iPhone 15 Pro 256GB Blue"
            price={150500}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-15-pro/blue-titanium/iphone-15-pro-titanium-blue-01-500x500.webp"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Xtrike Me GH-510 RGB"
            price={3330}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/headset/xtrike-me/gh-510/gh-510-01-500x500.webp"
          />

          <ProductCard
            productId="Samsung Galaxy S22 Ultra"
            name="Samsung Galaxy S22 Ultra"
            price={175999}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s22-ultra/galaxy-s22-ultra-black-500x500.webp"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Jackhammer Pro Gaming Casing"
            price={11000}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/casing/revenger/jackhammer-pro/jackhammer-pro-01-500x500.webp"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Canon EOS 90D 32.5MP"
            price={155000}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/eos-90d/eos-90d-500x500.jpg"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="AORUS AGC310"
            price={25500}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/gaming-chair/gigabyte/aorus-agc310/aorus-agc310-1-500x500.jpg"
          />

          <ProductCard
            productId="Mackbook Pro 64TB"
            name="Fantech HG11 PRO Captain 7.1 "
            price={3200}
            stock={33}
            handler={addToCartHandler}
            photo="https://www.startech.com.bd/image/cache/catalog/headphone/fantech/hg11-pro/hg11-pro-01-500x500.jpg"
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
