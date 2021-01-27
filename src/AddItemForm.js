import React, { useState } from "react";

const AddItemForm = (props) => {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    props.onSubmit({ itemMessage: input, isChecked: false });
    setInput("");
  };
  return (
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
      <button
        type="button"
        className="btn btn__primary btn__lg"
        onClick={handleSubmit}
      >
        {props.buttonName}
      </button>
    </form>
  );
};
export default AddItemForm;
