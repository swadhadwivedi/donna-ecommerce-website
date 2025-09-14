import { useCart } from "../context/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cartItems, addToCart, decreaseQty } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Shopping Bag</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
  <button onClick={() => decreaseQty(item.id)}>-</button>
  <span>{item.quantity}</span>
  <button onClick={() => addToCart(item, false)}>+</button>
</div>

              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total: ₹{total}</p>
          <button>Continue to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
