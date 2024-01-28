import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};
  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  return (
    <div className="container">
      <div className="product-search-page">
        <aside>
          <h2>Filters</h2>
          <div>
            <h4>Sort</h4>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">None</option>
              <option value="asc">Price (Low to High)</option>
              <option value="dsc">Price (High to Low)</option>
            </select>
          </div>

          <div>
            <h4>Max Price: {maxPrice || ""}Tk</h4>
            <input
              type="range"
              min={1}
              max={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <div>
            <h4>Category</h4>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">ALL</option>
            </select>
          </div>
        </aside>
        <main>
          <h1>Products</h1>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="search-product-list">
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
          </div>

          <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              {page} of {4}
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Search;
