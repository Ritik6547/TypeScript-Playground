import { useFilter } from "../context/FilterContext";
import { useTodos } from "../context/TodosContext";
import type { TodoItem } from "../types";
import { countIncompletedTasks } from "../utils/countIncompletedTasks";
import Button from "./Button";
import StatusButtons from "./StatusButtons";

type TodoStatusProps = {
  filteredTasks: TodoItem[];
};

const TodoStatus = ({ filteredTasks }: TodoStatusProps) => {
  const { dispatch: todosDispatch } = useTodos();
  const { dispatch: filterDispatch } = useFilter();

  const handleClearCompleted = () => {
    filterDispatch({ type: "updateFilter", payload: "all" });
    todosDispatch({ type: "clearCompletedTodo" });
  };

  const count = countIncompletedTasks(filteredTasks);

  return (
    <div className="status-container">
      <p>
        <span className="item-count">{count}</span>{" "}
        <span className="task-left">{count > 1 ? "tasks" : "task"} left</span>
      </p>
      <StatusButtons />
      <Button
        onClick={handleClearCompleted}
        btnClass="clear-completed"
        label="Clear Completed"
      />
    </div>
  );
};

export default TodoStatus;
