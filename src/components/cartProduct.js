import style from './styles/cartProduct.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";


export function CartProduct() {
  return (
    <div className={style.product_container}>
      <img
        className={style.product_image}
        src="https://gandaramjewellers.com/wp-content/uploads/20PTEPR36.png"
      />
      <div className={style.product_details}>Product details...</div>
      <div>
        <span className={style.price}>&#8377; 899</span>{" "}
        <span className={style.quantity}>
          <FontAwesomeIcon icon={faCirclePlus} />
          &nbsp;&nbsp;8&nbsp;&nbsp;
          <FontAwesomeIcon icon={faCircleMinus} />
        </span>
      </div>
      <button className={style.remove_button}>Remove From Cart</button>
    </div>
  );
}
