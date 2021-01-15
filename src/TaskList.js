import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <>
      <h2 id="list-heading">{props.taskList.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {props.taskList.map((card) => (
          <TaskItem isChecked={card.isChecked}>{card.itemMessage}</TaskItem>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
