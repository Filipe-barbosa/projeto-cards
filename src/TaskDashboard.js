import TaskButtonFilter from "./TaskButtonFilter";
import React, { useState } from "react";
import TaskList from "./TaskList";

const TaskDashboard = (props) => {
  const [buttonPressed, setButtonPressed] = useState("All");
  const buttonFilter = ["All", "Active", "Complete"];
  return (
    <>
      <div className="filters btn-group stack-exception">
        {buttonFilter.map((buttonName, index) => (
          <TaskButtonFilter
            message={buttonName}
            isAriaPressed={buttonPressed === buttonName}
            onSetActive={() => setButtonPressed(buttonName)}
            buttonFilter={buttonFilter}
            buttonPressed={buttonPressed}
          ></TaskButtonFilter>
        ))}
      </div>
      <TaskList taskList={props.taskList} setTasklist={props.setTasklist} />
    </>
  );
};
export default TaskDashboard;
