import style from './styles/productCard.module.css';


export function ProductCard() {
    

    return (
      <>
        <div className={style.productCard}>
          <img
            className={style.productImage}
            src="https://5.imimg.com/data5/SELLER/Default/2022/4/OY/AC/ZT/31003867/12121521.jpg"
          />
          <div className={style.productDetails}>product details...</div>
          <div className={style.price}> &#8377; 400</div>
          <button className={style.addToCart}>Add to Cart</button>
        </div>
      </>
    );

}