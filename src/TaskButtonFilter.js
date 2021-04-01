const TaskButtonFilter = (props) => {
  const buttonOnClick = () => {
    props.onSetActive(props.message);
  };
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isAriaPressed}
      onClick={props.onSetActive}
    >
      <span className="visually-hidden">Show </span>
      <button>{props.message}</button>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default TaskButtonFilter;
