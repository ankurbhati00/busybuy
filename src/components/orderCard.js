import style from './styles/orderCard.module.css';

export function OrderCard() {
  return (
    <div className={style.order_card_container}>
      <h2 className={style.order_card_header}>Orderd on:- 2023-09-08 </h2>
      <table className={style.table} >
        <thead>
          <tr>
            <th className={style.table_header}>Title</th>
            <th className={style.table_header}>Price</th>
            <th className={style.table_header}>Quantity</th>
            <th className={style.table_header}>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>product name</td>
            <td>&#x20B9; 899</td>
            <td>1</td>
            <td> &#x20B9; 899</td>
          </tr>
        </tbody>
              <tr className={style.total}>
                  <td></td>
                  <td></td>
                  <td></td>
            <td >&#x20B9; 899</td>
          </tr>
      </table>
    </div>
  );
}
