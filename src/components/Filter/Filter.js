import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selector';
import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <div className={styles.filterBox}>
      <p className={styles.filterTitle}>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search contact"
      />
    </div>
  );
};

export default Filter;
