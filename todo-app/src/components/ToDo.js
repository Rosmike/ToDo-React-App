import React, { useState, useEffect } from "react";
import {
  getOperations,
  addOperation,
  editOperation,
  delOperation,
} from "./tasks";
import Operation from "./Operation";

const ToDo = ({ task, delTask, finishTask }) => {
  const [operations, setOperations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newOpDescription, setNewOpDescription] = useState("");
  const [reloading, reloadOperations] = useState(false);

  const { id, title, description, status } = task;

  useEffect(() => {
    getOperations(setOperations, id);
  }, [reloading]);

  const handleDescriptionChange = ({ target: { value } }) => {
    setNewOpDescription(value);
  };

  const addNewOperation = (e) => {
    e.preventDefault();

    addOperation(reloadOperations, id, { description: newOpDescription });
    setShowForm(false);
  };

  const addTime = (body, id) => {
    editOperation(reloadOperations, id, body);
  };

  return !operations ? (
    <li>loading...</li>
  ) : (
    <li className="todo">
      <div className="todo__header">
        <div className="todo__row">
          <h3 className="todo__title">{title}</h3>
          <p className="todo__description">{description}</p>
        </div>
        <div>
          {status === "open" && (
            <>
              <button
                className="btn btn--skyblue btn--small"
                onClick={() => setShowForm((prev) => !prev)}
              >
                Add operation <i className="fas fa-plus-circle" />
              </button>
              <button
                className="btn btn--black btn--small"
                onClick={() => finishTask(task)}
              >
                Finish <i className="fas fa-archive" />
              </button>
            </>
          )}
          {!operations.length && (
            <button
              className="btn btn--empty-red btn--small"
              onClick={() => delTask(id)}
            >
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      {(showForm || !operations.length) && status === "open" && (
        <form className="todo__form" onSubmit={addNewOperation}>
          <input
            type="text"
            className="todo__input left"
            value={newOpDescription}
            name="new operation description"
            placeholder="description"
            onChange={handleDescriptionChange}
          />
          <button
            className="todo__btn btn btn--skyblue btn--tiny right"
            type="submit"
          >
            Add <i className="fas fa-plus-circle" />
          </button>
        </form>
      )}
      <ul className="todo__operations">
        {operations.map((operation) => (
          <Operation
            key={operation.id}
            operation={operation}
            delOperation={(id) => {
              delOperation(reloadOperations, id);
            }}
            addTime={addTime}
            status={status}
          />
        ))}
      </ul>
    </li>
  );
};

export default ToDo;
