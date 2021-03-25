const TaskLItem = (props) => {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id="todo-0"
          type="checkbox"
          value={props.isChecked}
          onChange={props.onChecked}
        />
        <label className="todo-label" htmlFor="todo-0">
          {props.children}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.children}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={props.onDelete}
        >
          Delete <span className="visually-hidden">{props.children}</span>
        </button>
      </div>
    </li>
  );
};
export default TaskLItem;
