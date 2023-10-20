import style from './styles/cartProduct.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";



export function CartProduct({ data }) {
  const { product, quantity } = data;

  //remove items from cart
  const removeFromCart = () => {
    
  }

  return (
    <div className={style.product_container}>
      <img
        className={style.product_image}
        src={product.image}
      />
      <div className={style.product_details}>{ String(product.details).substring(0, 40)+'...'}</div>
      <div>
        <span className={style.price}>&#8377; { product.price}</span>
        <span className={style.quantity}>
          <FontAwesomeIcon icon={faCirclePlus} className={style.icon} />
          &nbsp;&nbsp;8&nbsp;&nbsp;
          <FontAwesomeIcon icon={faCircleMinus} className={style.icon} />
        </span>
      </div>
      <button className={style.remove_button}>Remove From Cart</button>
    </div>
  );
}
