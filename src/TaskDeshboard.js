import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";
const TaskDeshboard = () => {
  const buttons = [
    { message: "all", isAriaPressed: true },
    { message: "Active", isAriaPressed: false },
    { message: "Complete", isAriaPressed: false },
  ];
  const cardList = [
    { chekboxMessage: "Eat", chekboxCheked: true },
    { chekboxMessage: "Edit", chekboxCheked: false },
    { chekboxMessage: "Sleep", chekboxCheked: false },
  ];
  const numTasks = cardList.length;
  return (
    <>
      <div className="filters btn-group stack-exception">
        {buttons.map((button) => (
          <TaskFilter
            message={button.message}
            isAriaPressed={button.isAriaPressed}
          />
        ))}
      </div>

      <h2 id="list-heading">{numTasks} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {cardList.map((card) => (
          <TaskList
            chekboxMessage={card.chekboxMessage}
            chekboxCheked={card.chekboxCheked}
          />
        ))}
      </ul>
    </>
  );
};
export default TaskDeshboard;
