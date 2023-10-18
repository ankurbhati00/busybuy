import style from "./styles/filterCard.module.css";
import { useDispatch } from "react-redux";
import { homeActions } from "../redux/reducers/home.reducer";
import { useState } from "react";

let categories = [];
export function Filter() {
  const dispatch = useDispatch();
  const [range, setRange] = useState({ price: 4999, category: [] });

  //set the state according to the price range
  const handleRange = (e) => {
    const value = e.target.value;
    setRange({ price: value, category: categories });

    dispatch(homeActions.filter(range));
  };
  //get the check box values
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      categories.push(e.target.value);
    } else {
      categories.splice(categories.indexOf(e.target.value), 1);
    }
    dispatch(homeActions.filter({ price: range.price, category: categories }));
  };

  return (
    <aside className={style.filter_container}>
      <h2>Filter</h2>
      <div>Price: {range.price}</div>
      <input
        min="1"
        max="9999"
        type="range"
        onChange={handleRange}
        className={style.range}
      />
      <h2>Category</h2>
      <ul className={style.category_list}>
        <li>
          <input
            className={style.checkbox}
            onChange={handleCheckbox}
            value="men's clothing"
            type="checkbox"
          />
          Men's Clothing
        </li>
        <li>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            className={style.checkbox}
            value="women's clothing"
          />
          Women's Clothing
        </li>
        <li>
          <input
            type="checkbox"
            value="jewelery"
            onChange={handleCheckbox}
            className={style.checkbox}
          />
          Jewelery
        </li>
        <li>
          <input
            type="checkbox"
            value="electronics"
            onChange={handleCheckbox}
            className={style.checkbox}
          />
          Electronics
        </li>
      </ul>
    </aside>
  );
}
