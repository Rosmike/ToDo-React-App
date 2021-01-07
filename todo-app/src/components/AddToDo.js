import React, { useState, useEffect } from "react";

const AddToDo = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();

    addTask({
      title,
      description,
      status: "open",
    });
  };

  const handleTitleChange = ({ target: { value } }) => {
    setTitle(value);
  };
  const handleDescriptionChange = ({ target: { value } }) => {
    setDescription(value);
  };

  return (
    <div className="add-todo">
      <h1 className="add-todo__title">New task:</h1>
      <form className="add-todo__form" onSubmit={addNewTask}>
        <input
          type="text"
          className="add-todo__input"
          name="new task title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          typeof="text"
          className="add-todo__input"
          name="new task description"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button
          className="add-todo__submit btn btn--skyblue"
          type="submit"
          value="Add task"
        >
          Add task <i className="fas fa-plus-circle" />
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
