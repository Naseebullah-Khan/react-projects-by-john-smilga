import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  return (
    <section className="cart">
      {amount < 1 ? (
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      ) : (
        <>
          <header>
            <h2>your bag</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                Total <span>${total}</span>
              </h4>
            </div>
            <button type="button" className="btn clear-btn">
              clear cart
            </button>
          </footer>
        </>
      )}
    </section>
  );
};

export default CartContainer;
