import style from './styles/productCard.module.css';


export function ProductCard({data}) {

    return (
      <>
        <div className={style.productCard}>
          <img className={style.productImage} src={data.image} />
          <div className={style.productDetails}>
            {data.details.substring(0, 40)+'...'}
          </div>
          <div className={style.price}> &#8377; {data.price}</div>
          <button className={style.addToCart}>Add to Cart</button>
        </div>
      </>
    );

}