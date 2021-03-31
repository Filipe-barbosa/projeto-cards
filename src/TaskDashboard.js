import TaskButtonFilter from "./TaskButtonFilter";
import TaskList from "./TaskList";

const TaskDashboard = (props) => {
  const buttonFilter = {
    All: {
      isPressed: true,
    },
    Active: {
      isPressed: false,
    },
    Complete: {
      isPressed: false,
    },
  };
  return (
    <>
      <div className="filters btn-group stack-exception">
        {Object.keys(buttonFilter).map((key, index) => (
          <TaskButtonFilter
          message={key}
          isAriaPressed={buttonFilter[key].isPressed}
          ></TaskButtonFilter>
        ))}
      </div>
      <TaskList taskList={props.taskList} setTasklist={props.setTasklist} />
    </>
  );
};
export default TaskDashboard;
