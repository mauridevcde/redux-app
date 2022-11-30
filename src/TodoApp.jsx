import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nexTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId > 1) {
      setTodoId(todoId - 1);
    } else {
    }
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isloading: {isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'Done ': 'Pending '}</strong>
             { todo.title}
            </li>
        ))}
      </ul> */}
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nexTodo}>Next Todo</button>
    </>
  );
};
