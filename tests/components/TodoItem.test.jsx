import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/components/TodoItem";

describe("Test on TodoItem component", () => {
  const todo = {
    id: 1,
    description: "Test todoItem component",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show pending todo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");

    screen.debug();
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should show completed todo", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("should call onToggleTodo() when span is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("should call onDeleteTodo() when button is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
