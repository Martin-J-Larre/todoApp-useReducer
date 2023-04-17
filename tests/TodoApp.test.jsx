import { render, screen } from "@testing-library/react";
import { TodoApp } from "../src/TodoApp";
import { useTodo } from "../src/hooks/useTodo";

jest.mock("../src/hooks/useTodo");

describe("Test on TodoApp", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: true },
    ],
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    todosCount: 2,
    todosPending: 1,
  });
  test("should show component correctly", () => {
    render(<TodoApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
