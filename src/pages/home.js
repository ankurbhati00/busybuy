import { SearchBar } from "../components/searchbar";
import { ProductCard } from "../components/productCard";
import style from "./styles/home.module.css";
import { Filter } from "../components/filter";

export function Home() {
  return (
    <>
      <SearchBar />
      <Filter />
      <section className={style.productContainer}>
        <ProductCard />
        
      </section>
    </>
  );
}
