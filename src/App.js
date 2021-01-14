import React from "react";
import "./App.css";
import Title from "./Title";
import AddItemForm from "./AddItemForm";
import TaskDeshboard from "./TaskDeshboard";

function App() {
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm buttonName="Add" formTitle="What needs to be done?" />
      <TaskDeshboard />
    </div>
  );
}
export default App;
