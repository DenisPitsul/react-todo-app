import { useMemo } from "react";

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
      filteredTodos = filteredTodos.filter((todo) =>
        Number(new Date() - new Date(todo.deadline) >= 0)
      );
    else if (overdue === "notoverdue")
      filteredTodos = filteredTodos.filter((todo) =>
        Number(new Date() - new Date(todo.deadline) < 0)
      );

    filteredTodos = filteredTodos
      .slice()
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    return filteredTodos;
  }, [todos, query, done, overdue]);

  return searchedTodos;
};
