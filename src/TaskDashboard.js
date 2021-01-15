import TaskButtonFilter from "./TaskButtonFilter";
import TaskList from "./TaskList";

const TaskDashboard = () => {
  const cardList = [
    { itemMessage: "Eat", isChecked: true },
    { itemMessage: "Edit", isChecked: false },
    { itemMessage: "Sleep", isChecked: false },
  ];

  return (
    <>
      <div className="filters btn-group stack-exception">
        <TaskButtonFilter message="All" isAriaPressed={true} />
        <TaskButtonFilter message="Active" isAriaPressed={false} />
        <TaskButtonFilter message="Complete" isAriaPressed={false} />
      </div>
      <TaskList taskList={cardList} />
    </>
  );
};
export default TaskDashboard;
