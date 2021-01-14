const TaskList = (props) => {
  return (
    <>
      <li className="todo stack-small">
        <div className="c-cb">
          <input
            id="todo-0"
            type="checkbox"
            defaultChecked={props.chekboxCheked}
          />
          <label className="todo-label" htmlFor="todo-0">
            {props.chekboxMessage}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.chekboxName}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{props.chekboxName}</span>
          </button>
        </div>
      </li>
    </>
  );
};
export default TaskList;
