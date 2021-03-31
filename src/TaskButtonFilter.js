import { useState } from "react"

const TaskButtonFilter = (props) => {
  const[isPressed, setIspressed]  = useState ()

  const handleButton = () => {
    
  }
  return(
  <button
    type="button"
    className="btn toggle-btn"
    aria-pressed={props.isAriaPressed}
    onClick = {handleButton}
  >
    <span className="visually-hidden">Show </span>
    <span>{props.message}</span>
    <span className="visually-hidden"> tasks</span>
  </button>
  )};

export default TaskButtonFilter;
