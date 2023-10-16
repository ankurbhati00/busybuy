import style from "./styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import {
  faHouseChimney,
  faBasketShopping,
  faCartPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.brandName}>Busy Buy</div>
        <ul className={style.navLinksContainer}>
          <li className={style.navLinks}>
            <FontAwesomeIcon className={style.icons} icon={faHouseChimney} />
            <Link className={style.link} to="/">
              Home
            </Link>
          </li>
          <li className={style.navLinks}>
            <FontAwesomeIcon className={style.icons} icon={faBasketShopping} />
            <Link className={style.link} to="orders">
              My orders
            </Link>
          </li>
          <li className={style.navLinks}>
            <FontAwesomeIcon className={style.icons} icon={faCartPlus} />
            <Link className={style.link} to="cart">
              Cart
            </Link>
          </li>
          <li className={style.navLinks}>
            <FontAwesomeIcon
              className={style.icons}
              icon={faRightFromBracket}
            />
            <Link className={style.link} to="logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
