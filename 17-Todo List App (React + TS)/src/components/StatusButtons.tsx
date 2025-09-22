import { useFilter } from "../context/FilterContext";
import Button from "./Button";

const StatusButtons = () => {
  const { filter, dispatch: filterDispatch } = useFilter();

  return (
    <div className="btn-container">
      <Button
        onClick={() => filterDispatch({ type: "updateFilter", payload: "all" })}
        btnClass="all-btn"
        activeClass={filter === "all" ? "active" : ""}
        label="All"
      />
      <Button
        onClick={() =>
          filterDispatch({ type: "updateFilter", payload: "pending" })
        }
        btnClass="pending-btn"
        label="Pending"
        activeClass={filter === "pending" ? "active" : ""}
      />
      <Button
        onClick={() =>
          filterDispatch({ type: "updateFilter", payload: "completed" })
        }
        btnClass="completed-btn"
        label="Completed"
        activeClass={filter === "completed" ? "active" : ""}
      />
    </div>
  );
};

export default StatusButtons;
