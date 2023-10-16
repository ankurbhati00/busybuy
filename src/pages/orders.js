import { OrderCard } from "../components/orderCard";
import style from './styles/orders.module.css'

export function Orders() {
  return (
    <div className={style.orders_summery}>
      <h1 className={style.orders_header}>Your Orders</h1>
      <OrderCard />
      <OrderCard />
    </div>
  );
}
