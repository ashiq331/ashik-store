
const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.00);
const shippingCharges = 300;
const discount = 400;
const total = subtotal + tax + shippingCharges;


const Cart = () => {
  return (
    <div className="cart">
      <main>

      </main>

      <aside>
        <p>Subtotal: {subtotal}</p>
        <p>Shipping Charges: {shippingCharges}</p>
        <p>tax: {tax}</p>

        <p>Discount: - {discount}</p>

        <p>
          <b>Total: BDT. {total} TK</b>
        </p>
      </aside>
    </div>
  );
};

export default Cart;
