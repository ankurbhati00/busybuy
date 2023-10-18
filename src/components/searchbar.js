import style from './styles/searchbar.module.css';
import { useDispatch } from 'react-redux';
import { homeActions } from '../redux/reducers/home.reducer';


export function SearchBar() {
    const dispatch = useDispatch();


    const handleChange = (e) => {
        dispatch(homeActions.search(e.target.value));
    }

    return (
        <>
            <input type="text" placeholder='Search By Name' onChange={handleChange} className={style.searchbar } />
        </>
)

}