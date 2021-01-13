import TaskFilter from "./TaskFilter";
const TaskDeshboard = () => {
  const buttons = [
    { message: "all", isAriaPressed: true },
    { message: "Active", isAriaPressed: false },
    { message: "Complete", isAriaPressed: false },
  ];
  return (
    <div className="filters btn-group stack-exception">
      {buttons.map((button) => (
        <TaskFilter
          message={button.message}
          isAriaPressed={button.isAriaPressed}
        />
      ))}
    </div>
  );
};
export default TaskDeshboard;
