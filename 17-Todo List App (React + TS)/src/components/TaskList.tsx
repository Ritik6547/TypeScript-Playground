import type { TodoItem } from "../types";
import TaskItem from "./TaskItem";

type TaskListProps = {
  filteredTasks: TodoItem[];
  setTaskInput: React.Dispatch<React.SetStateAction<string>>;
  setEditingId: React.Dispatch<React.SetStateAction<string | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const TaskList = ({
  filteredTasks,
  setTaskInput,
  setEditingId,
  setError,
}: TaskListProps) => {
  const handleEdit = (id: string) => {
    const task = filteredTasks.find((task) => task.id === id);
    if (!task) {
      setError("Task Not Found");
      return;
    }
    if (task.completed) {
      setError("Task is Completed, Cannot Edit");
      return;
    }
    setTaskInput(task.title);
    setEditingId(id);
  };

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => {
        return <TaskItem key={task.id} task={task} handleEdit={handleEdit} />;
      })}
    </ul>
  );
};

export default TaskList;
