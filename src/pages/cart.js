import { CartProduct } from "../components/cartProduct.js";
import style from "./styles/cart.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/reducers/cart.reducer.js";


export function Cart() {
  const { totalPrice, cart } = useSelector(cartSelector);


  const Purchase = () => {
    return (
      <div className={style.purchase_container}>
        <h2>Total Price: {totalPrice }/-</h2>
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
        {cart.map((prod) => <CartProduct data={prod } />)}
      </div>
    </>
  );
}
