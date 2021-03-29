import React, { useState } from "react";
import "./App.css";
import Title from "./Title";
import AddItemForm from "./AddItemForm";
import TaskDashboard from "./TaskDashboard";

function App() {
  const [taskList, setTasklist] = useState([]);

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        buttonName="Add"
        formTitle="What needs to be done?"
        onSubmit={(data) => setTasklist([...taskList, data])}
      />
      <TaskDashboard taskList={taskList} setTasklist={setTasklist} />
    </div>
  );
}
export default App;
