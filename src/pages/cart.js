import { CartProduct } from "../components/cartProduct.js";
import style from "./styles/cart.module.css";
export function Cart() {
  const Purchase = () => {
    return (
      <div className={style.purchase_container}>
        <h2>Total Price: 6999/-</h2>
        <button className={style.purchase_button} id="purchase-button">
          Purchase
        </button>
      </div>
    );
  };

  return (
    <>
      <Purchase />
      <div className={style.container}>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
    </>
  );
}
