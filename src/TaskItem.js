const TaskLItem = (props) => {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={props.isChecked} />
        <label className="todo-label" htmlFor="todo-0">
          {props.children}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.children}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.children}</span>
        </button>
      </div>
    </li>
  );
};
export default TaskLItem;
