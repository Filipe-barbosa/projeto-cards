import { useState } from "react";

const TaskLItem = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditvalue] = useState(props.children);

  const toggleEditedMode = () => {
    setIsEditMode(!isEditMode);
    props.onEdit(props.index, editValue);
  };
  const handleChangeEditValue = (e) => {
    setEditvalue(e.target.value);
  };

  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id="todo-0"
          type="checkbox"
          value={props.isChecked}
          onChange={props.onChecked}
        />
        {isEditMode ? (
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={editValue}
            onChange={handleChangeEditValue}
          />
        ) : (
          <label className="todo-label" htmlFor="todo-0">
            {props.children}
          </label>
        )}
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={toggleEditedMode}>
          {isEditMode ? "Save" : "Edit"}
          <span className="visually-hidden">{props.children}</span>
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
