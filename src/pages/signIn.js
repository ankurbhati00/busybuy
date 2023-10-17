import { Link } from "react-router-dom";
import style from "./styles/signin.module.css";

export function SignIn() {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Sign In</h1>
      <form action="/">
        <input
          className={style.input}
          type="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          className={style.input}
          type="password"
          placeholder="Enter password"
        />
        <br />
        <button className={style.signin_btn}>Sign In</button>
      </form>
      <div>
        <Link to="/sign-up" className={style.bottom_text}>
          or Sign up instead
        </Link>
      </div>
    </div>
  );
}
