import { SearchBar } from "../components/searchbar";
import { ProductCard } from "../components/productCard";
import style from "./styles/home.module.css";
import { Filter } from "../components/filter";
import { useSelector } from "react-redux";
import { fetchData, homeSelector } from "../redux/reducers/home.reducer";
import { Loader } from "../components/loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export function Home() {
  const { loading, products } = useSelector(homeSelector);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchData());
},[])

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SearchBar />
      <Filter />
      <section className={style.productContainer}>
        {products.map((elm) => (
          <ProductCard key={elm.id} data={elm} />
        ))}
      </section>
    </>
  );
}
