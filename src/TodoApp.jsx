import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    todosPending,
  } = useTodo();
  return (
    <div className="container">
      <h1>
        TodoApp: {todosCount} | Pending:
        {todosPending}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
