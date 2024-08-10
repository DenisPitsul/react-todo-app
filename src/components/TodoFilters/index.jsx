import React from "react";
import { connect } from "react-redux";
import { setDone, setOverdue, setValue } from "../../store/slices/filterSlice";
import styles from "./TodoFilters.module.sass";

function TodoFilters({
  value,
  done,
  overdue,
  setValueFilter,
  setDoneFilter,
  setOverdueFilter,
}) {
  const onValueFilterChange = ({ target: { value } }) => setValueFilter(value);

  const onDoneFilterSelect = ({ target: { value } }) => setDoneFilter(value);

  const onOverdueFilterSelect = ({ target: { value } }) =>
    setOverdueFilter(value);

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filterWrapper}>
        <h3 className={styles.filterTitle}>Value:</h3>
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={onValueFilterChange}
        />
      </div>
      <div className={styles.filterWrapper}>
        <h3 className={styles.filterTitle}>Done:</h3>
        <select
          className={styles.filterInput}
          value={done}
          onChange={onDoneFilterSelect}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
        </select>
      </div>
      <div className={styles.filterWrapper}>
        <h3 className={styles.filterTitle}>Overdue:</h3>
        <select
          className={styles.filterInput}
          value={overdue}
          onChange={onOverdueFilterSelect}
        >
          <option value="all">All</option>
          <option value="overdue">Overdue</option>
          <option value="notoverdue">Not overdue</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = ({ filter }) => filter;

const mapDispatchToProps = (dispatch) => ({
  setValueFilter: (value) => dispatch(setValue(value)),
  setDoneFilter: (doneOption) => dispatch(setDone(doneOption)),
  setOverdueFilter: (overdueOption) => dispatch(setOverdue(overdueOption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters);
