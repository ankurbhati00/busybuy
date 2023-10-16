import style from "./styles/filterCard.module.css";

export function Filter() {
  return (
    <aside className={style.filter_container}>
      <h2>Filter</h2>
      <div>Price: 9999</div>
      <input min="1" max="99991" type="range" className={style.range} />
      <h2>Category</h2>
      <ul className={style.category_list}>
        <li>
          <input className={style.checkbox}  type="checkbox" />
          Men's Clothing
        </li>
        <li>
          <input type="checkbox" className={style.checkbox} />
          Women's Clothing
        </li>
        <li>
          <input type="checkbox" className={style.checkbox} />
          Jewelery
        </li>
        <li>
          <input type="checkbox" className={style.checkbox} />
          Electronics
        </li>
      </ul>
    </aside>
  );
}
