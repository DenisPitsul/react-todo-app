import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCancel, MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import { useState } from "react";
import { deleteTodo, updateTodo } from "../../store/slices/todoSlice";
import { isDateAfterYesterday } from "../../utils/date";
import styles from "./TodoItem.module.sass";
import classNames from "classnames";

function TodoItem({
  todo: { id, isDone, value, deadline },
  updateTodoItem,
  deleteTodoItem,
}) {
  const [isUpdateInputOpened, setIsUpdateInputOpened] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(value);

  const onUpdateValueChange = (e) => {
    e.stopPropagation();
    setUpdatedValue(e.target.value);
  };

  const setTodoValue = (id, value) => {
    if (updatedValue) {
      updateTodoItem(id, { value });
      setIsUpdateInputOpened(false);
    }
  };

  const changeIsDone = (id, isDone) => updateTodoItem(id, { isDone });

  const onDeleteTodo = (event, id) => {
    event.stopPropagation();
    deleteTodoItem(id);
  };

  const onCancelUpdate = () => {
    setIsUpdateInputOpened(false);
    setUpdatedValue(value);
  };

  const addChangesIconClassName = classNames(styles.icon, {
    [styles.disabledIcon]: !updatedValue,
  });

  return (
    <li className={styles.todoItem}>
      {isDone ? (
        <ImCheckboxChecked
          className={styles.icon}
          onClick={() => changeIsDone(id, false)}
        />
      ) : (
        <ImCheckboxUnchecked
          className={styles.icon}
          onClick={() => changeIsDone(id, true)}
        />
      )}
      {isUpdateInputOpened ? (
        <input
          className={styles.updateInput}
          value={updatedValue}
          onChange={onUpdateValueChange}
        />
      ) : (
        <span className={styles.value}>{value}</span>
      )}
      <span className={styles.deadline}>{deadline}</span>
      {isUpdateInputOpened ? (
        <div className={styles.buttonsWrapper}>
          <IoMdAddCircleOutline
            className={addChangesIconClassName}
            onClick={() => setTodoValue(id, updatedValue)}
          />
          <MdCancel className={styles.icon} onClick={onCancelUpdate} />
        </div>
      ) : (
        <div className={styles.buttonsWrapper}>
          {isDateAfterYesterday(deadline) && (
            <BsPencilSquare
              className={styles.icon}
              onClick={() => setIsUpdateInputOpened(true)}
            />
          )}
          <MdDelete
            className={`${styles.icon} ${styles.deleteIcon}}`}
            onClick={(e) => onDeleteTodo(e, id)}
          />
        </div>
      )}
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateTodoItem: (id, data) => dispatch(updateTodo({ id, data })),
  deleteTodoItem: (id) => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
