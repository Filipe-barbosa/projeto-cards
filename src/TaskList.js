import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const deleteItem = (indexDelete) => {
    const newList = props.taskList.filter((_, index) => index !== indexDelete);
    props.setTasklist(newList);
  };
  return (
    <>
      <h2 id="list-heading">{props.taskList.length} tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {props.taskList.map((item, index) => (
          <TaskItem
            key={item.itemMessage + index}
            isChecked={item.isChecked}
            onDelete={() => deleteItem(index)}
          >
            {item.itemMessage}
          </TaskItem>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
