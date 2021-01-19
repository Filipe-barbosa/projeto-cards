const TaskButtonFilter = (props) => (
  <button
    type="button"
    className="btn toggle-btn"
    aria-pressed={props.isAriaPressed}
  >
    <span className="visually-hidden">Show </span>
    <span>{props.message}</span>
    <span className="visually-hidden"> tasks</span>
  </button>
);

export default TaskButtonFilter;
