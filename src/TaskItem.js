import { useState } from "react";

const TaskLItem = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditvalue] = useState(props.children);

  const toggleEditedMode = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) props.onEdit(editValue);
  };
  const handleChangeEditValue = (e) => {
    setEditvalue(e.target.value);
  };

  return (
    <li className="todo stack-small">
      {isEditMode ? (
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          style={{ padding: 5, marginBottom: 3 }}
          name="text"
          autoComplete="off"
          value={editValue}
          onChange={handleChangeEditValue}
        />
      ) : (
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
      )}
      <div className="btn-group">
        <button type="button" className="btn" onClick={toggleEditedMode}>
          {isEditMode ? "Save" : "Edit "}
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
