import TaskButtonFilter from "./TaskButtonFilter";
import TaskList from "./TaskList";

const TaskDashboard = (props) => {
  return (
    <>
      <div className="filters btn-group stack-exception">
        {props.buttonFilter.map((buttonName, index) => (
          <TaskButtonFilter
            message={buttonName}
            isAriaPressed={props.buttonPressed === buttonName}
            onSetActive={props.setButtonPressed}
            buttonFilter={props.buttonFilter}
            setButtonPressed={props.setButtonPressed}
            buttonPressed={props.buttonPressed}
          ></TaskButtonFilter>
        ))}
      </div>
      <TaskList taskList={props.taskList} setTasklist={props.setTasklist} />
    </>
  );
};
export default TaskDashboard;
