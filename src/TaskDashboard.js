import TaskButtonFilter from "./TaskButtonFilter";
import TaskList from "./TaskList";

const TaskDashboard = (props) => {
  return (
    <>
      <div className="filters btn-group stack-exception">
        <TaskButtonFilter message="All" isAriaPressed={true} />
        <TaskButtonFilter message="Active" isAriaPressed={false} />
        <TaskButtonFilter message="Complete" isAriaPressed={false} />
      </div>
      <TaskList taskList={props.taskList} setTasklist={props.setTasklist} />
    </>
  );
};
export default TaskDashboard;
