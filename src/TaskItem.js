import { useState } from "react";

const TaskLItem = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditvalue] = useState(props.children);

  const toggleEditedMode = () => {
    setIsEditMode(!isEditMode);
  };
  const onChangeEditValue = (e) => {
    setEditvalue(e.target.value);
  };
  const onBlurEditValue = (e) => {
    props.onEdit(props.index, editValue);
    setEditvalue(!isEditMode);
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
            value={editValue}
            onChange={onChangeEditValue}
            onBlur={onBlurEditValue}
          />
        ) : (
          <label className="todo-label" htmlFor="todo-0">
            {props.children}
          </label>
        )}
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={toggleEditedMode}>
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
