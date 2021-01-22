import React, { useState } from "react";
const [tarefas, setTarefas] = useState([]);

const handleTarefas = () => {
  setTarefas([...tarefas, input]);
  setInput("");
};

const [input, setInput] = useState("");

const AddItemForm = (props) => (
  <form>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        {props.formTitle}
      </label>
    </h2>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
    />
    <button type="submit" className="btn btn__primary btn__lg">
      onClick{handleTarefas}
      {props.buttonName}
    </button>
  </form>
);
export default AddItemForm;
