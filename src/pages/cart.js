import  {CartProduct}  from "../components/cartProduct.js";
import style from './styles/cart.module.css';
export function Cart() {
    return (
      <div className={style.container}>
        <CartProduct />
      </div>
    );
}
