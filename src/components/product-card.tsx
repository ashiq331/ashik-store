import {FaShoppingBag} from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
}

const server = "fhegwf";

const ProductCard = ({productId, price, name, photo, stock, handler}:ProductsProps) => {
  return (
    <div className="product_card">
      {/* <img src={`${server}/${photo}`} alt={name} /> */}
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>Price. {price} TK</span>

      <div>
        <button onClick={() => handler()}><FaShoppingBag /></button>
      </div>
    </div>
  )
}

export default ProductCard