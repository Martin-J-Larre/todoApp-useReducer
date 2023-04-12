import { useForm } from "../hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {
  const { description, onInputChange, onFormReset } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    onNewTodo(newTodo);
    onFormReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo here..."
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Add
      </button>
    </form>
  );
};
