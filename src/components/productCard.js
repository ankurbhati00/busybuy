import style from './styles/productCard.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/reducers/cart.reducer';

export function ProductCard({data}) {
  const dispatch = useDispatch();


  const addToCart = () => {
    dispatch(cartActions.add(data));
}

    return (
      <>
        <div className={style.productCard}>
          <img className={style.productImage} src={data.image} />
          <div className={style.productDetails}>
            {data.details.substring(0, 40)+'...'}
          </div>
          <div className={style.price}> &#8377; {data.price}</div>
          <button className={style.addToCart} onClick={addToCart}>Add to Cart</button>
        </div>
      </>
    );

}