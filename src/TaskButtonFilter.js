const TaskButtonFilter = (props) => {
  const buttonOnClick = () => {
    props.onSetActive(props.message);
  };
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isAriaPressed}
      onClick={buttonOnClick}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.message}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

export default TaskButtonFilter;
