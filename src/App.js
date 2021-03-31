import React, { useState } from "react";
import "./App.css";
import Title from "./Title";
import AddItemForm from "./AddItemForm";
import TaskDashboard from "./TaskDashboard";

function App() {
  const [taskList, setTasklist] = useState([]);
  const [buttonPressed, setButtonPressed] = useState("All");
  const buttonFilter = ["All", "Active", "Complete"];

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        buttonName="Add"
        formTitle="What needs to be done?"
        onSubmit={(data) => setTasklist([data, ...taskList])}
        setButtonPressed={setButtonPressed}
      />
      <TaskDashboard
        taskList={taskList}
        setTasklist={setTasklist}
        buttonFilter={buttonFilter}
        setButtonPressed={setButtonPressed}
        buttonPressed={buttonPressed}
      />
    </div>
  );
}
export default App;
