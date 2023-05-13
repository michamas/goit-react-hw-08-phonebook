import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice.js';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="filter">
        <input
          placeholder="search by name"
          id="filter"
          type="search"
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
