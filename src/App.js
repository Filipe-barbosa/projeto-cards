import React, { useState } from "react";
import "./App.css";
import Title from "./Title";
import AddItemForm from "./AddItemForm";
import TaskDashboard from "./TaskDashboard";

function App() {
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm buttonName="Add" formTitle="What needs to be done?">
        handleTarefas(tarefa){setTarefas([...tarefas, input])}
      </AddItemForm>
      <TaskDashboard />
    </div>
  );
}
export default App;
