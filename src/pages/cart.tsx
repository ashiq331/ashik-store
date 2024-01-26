import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "dhsfgas",
    photo:
      "https://www.startech.com.bd/image/cache/catalog/headset/xtrike-me/gh-510/gh-510-01-500x500.webp",
    name: "Mackbook",
    price: 3000,
    quantity: 3,
    stock: 10,
  },
];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.0);
const shippingCharges = 300;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);
  return (
    <div className="container">
      <div className="cart">
        <main>
          {cartItems.length > 0 ? (
            cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
          ) : (
            <h1>No Items Added</h1>
          )}
        </main>

        <aside>
          <h1>Payment Details:</h1>

          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>

          <p>
            Discount: <em className="red">-{discount}tk</em>{" "}
          </p>

          <p>
            <b>Total: BDT. {total} TK</b>
          </p>

          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />

          {couponCode &&
            (isValidCouponCode ? (
              <span className="green">
                {discount}tk off using the <code>"{couponCode}"</code>
              </span>
            ) : (
              <span className="red">
                Invalid Coupon <VscError />
              </span>
            ))}

          {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
        </aside>
      </div>
    </div>
  );
};

export default Cart;
