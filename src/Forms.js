const AddItemForm = (props) => (
  <form>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
    />
    <button type="submit" className="btn btn__primary btn__lg">
      {props.formTitle}
    </button>
  </form>
);
export default AddItemForm
