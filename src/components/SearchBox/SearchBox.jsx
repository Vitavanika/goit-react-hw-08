import styles from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor='search' className={styles.label}>
        Find contacts by name
      </label>
      <input
        type='text'
        id='search'
        value={filter}
        onChange={handleChange}
        className={styles.input}
        placeholder='Search...'
      />
    </div>
  );
}

export default SearchBox;