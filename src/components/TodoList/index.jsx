import { connect } from "react-redux";
import { useTodos } from "../../hooks/useTodos";
import TodoItem from "../TodoItem";
import styles from "./TodoList.module.sass";

function TodoList({ todos, value, done, overdue }) {
  const sortedFilteredTodos = useTodos(todos, value, done, overdue);

  return (
    <ul className={styles.list}>
      {sortedFilteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

const mapStateToProps = ({
  todo: { todos },
  filter: { value, done, overdue },
}) => ({ todos, value, done, overdue });

export default connect(mapStateToProps)(TodoList);
