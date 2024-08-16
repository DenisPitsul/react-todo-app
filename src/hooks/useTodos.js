import { useMemo } from "react";
import { isDateAfterYesterday } from "../utils/date";

export const useTodos = (todos, query, done, overdue) => {
  const searchedTodos = useMemo(() => {
    let filteredTodos = todos.filter((todo) =>
      todo.value.toLocaleLowerCase().includes(query.toLowerCase())
    );

    if (done === "done")
      filteredTodos = filteredTodos.filter((todo) => todo.isDone);
    else if (done === "undone")
      filteredTodos = filteredTodos.filter((todo) => !todo.isDone);

    if (overdue === "overdue")
      filteredTodos = filteredTodos.filter(
        (todo) => !isDateAfterYesterday(new Date(todo.deadline))
      );
    else if (overdue === "notoverdue")
      filteredTodos = filteredTodos.filter((todo) =>
        isDateAfterYesterday(new Date(todo.deadline))
      );

    filteredTodos = filteredTodos
      .slice()
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    return filteredTodos;
  }, [todos, query, done, overdue]);

  return searchedTodos;
};
