import { useTodos } from "../context/TodosContext";
import type { TodoItem } from "../types";

type TaskItemProps = {
  task: TodoItem;
  handleEdit: (id: string) => void;
};

const TaskItem = ({ task, handleEdit }: TaskItemProps) => {
  const { dispatch: todosDispatch } = useTodos();
  const { id, title, completed } = task;

  const handleCheckbox = () => {
    todosDispatch({ type: "toggleTodo", payload: id });
  };

  const handleDelete = () => {
    todosDispatch({ type: "removeTodo", payload: id });
  };

  return (
    <li className="item">
      <div
        onClick={handleCheckbox}
        className={`checkbox ${completed && "completed"}`}>
        {completed && <i className="fa-solid fa-check check-icon"></i>}
      </div>
      <div className={`task ${completed && "strike"}`}>{title}</div>

      <i
        onClick={() => handleEdit(id)}
        className="fa-regular fa-pen-to-square edit-icon"></i>
      <i onClick={handleDelete} className="fa-solid fa-trash delete-icon"></i>
    </li>
  );
};

export default TaskItem;
