import style from './styles/searchbar.module.css';

export function SearchBar() {
    

    return (
        <>
            <input type="text" placeholder='Search By Name' className={style.searchbar } />
        </>
)

}