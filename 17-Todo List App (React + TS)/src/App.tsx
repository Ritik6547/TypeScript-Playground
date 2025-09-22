import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import AddTaskContainer from "./components/AddTaskContainer";
import TaskList from "./components/TaskList";
import TodoStatus from "./components/TodoStatus";
import { createTask } from "./utils/createTask";
import { useTodos } from "./context/TodosContext";
import { useFilter } from "./context/FilterContext";

const App = () => {
  const { allTasks, dispatch: todosDispatch } = useTodos();
  const { filter } = useFilter();
  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const filteredTasks = useMemo(() => {
    if (filter === "pending") {
      return allTasks.filter((task) => !task.completed);
    }
    if (filter === "completed") {
      return allTasks.filter((task) => task.completed);
    }
    return allTasks;
  }, [filter, allTasks]);

  useEffect(() => {
    if (!error) return;
    const timerId = setTimeout(() => {
      setError(null);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [error]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleSubmitTask = () => {
    if (!taskInput.trim()) {
      setError("Task Cannot be Empty");
      return;
    }

    if (editingId) {
      todosDispatch({ type: "editTodo", payload: { editingId, taskInput } });
      setEditingId(null);
      setTaskInput("");
      setError("");
      return;
    }

    const isDuplicate = allTasks.some(
      (task) => task.title.toLowerCase() === taskInput.trim().toLowerCase()
    );
    if (isDuplicate) {
      setError("Task already exists");
      return;
    }

    const task = createTask(taskInput.trim());

    todosDispatch({ type: "addTodo", payload: task });
    setTaskInput("");
    setError("");
  };

  return (
    <>
      <div className="top-section"></div>
      <div className="bottom-section"></div>

      <main className="main-container">
        <h1 className="title">TODO</h1>
        <AddTaskContainer
          value={taskInput}
          onClick={handleSubmitTask}
          editingId={editingId}
          error={error}
          onChange={handleChange}
        />
        <TaskList
          filteredTasks={filteredTasks}
          setEditingId={setEditingId}
          setTaskInput={setTaskInput}
          setError={setError}
        />
        <TodoStatus filteredTasks={filteredTasks} />
      </main>
    </>
  );
};

export default App;
