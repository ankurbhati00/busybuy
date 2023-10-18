import style from "./styles/loader.module.css";

export function Loader() {
  return (
    <>
      <div className={style.spinner_container}>
        <div className={style.loading}>Loading...</div>
        <div className={style.spinner}></div>
      </div>
    </>
  );
}
