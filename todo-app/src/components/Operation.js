import React, { useState, useEffect } from "react";

const Operation = ({ operation, delOperation, addTime, status }) => {
  const [showAddTimeForm, setShowAddTimeForm] = useState(false);
  const [timeToAdd, setTimeToAdd] = useState("");

  const { id, description, timeSpent } = operation;

  const handleTimeChange = ({ target: { value } }) => {
    setTimeToAdd(parseInt(value));
  };

  const addTimeSpent = (e) => {
    e.preventDefault();

    addTime({ description, timeSpent: timeSpent + timeToAdd }, id);
    setShowAddTimeForm(false);
  };

  return (
    <li className="operation">
      <div>
        {description}{" "}
        {timeSpent > 0 && (
          <span className="operation__time">
            {~~(timeSpent / 60)}h {~~(timeSpent % 60)}m
          </span>
        )}
      </div>
      <div>
        {showAddTimeForm ? (
          <form onSubmit={addTimeSpent}>
            <input
              type="text"
              className="operation__input left"
              value={timeToAdd}
              placeholder="Spent time in minutes"
              onChange={handleTimeChange}
            />
            <button
              className="btn btn--tiny btn--empty-green middle"
              type="submit"
            >
              <i className="fas fa-save" />
            </button>
            <button
              className="btn btn--tiny btn--empty-black right"
              onClick={() => {
                setShowAddTimeForm(false);
              }}
            >
              <i className="fas fa-times" />
            </button>
          </form>
        ) : (
          <>
            {status === "open" && (
              <button
                className="btn btn--small btn--empty-green"
                onClick={() => {
                  setShowAddTimeForm(true);
                }}
              >
                Add time <i className="fas fa-plus-circle" />
              </button>
            )}
            <button
              className="btn btn--small btn--empty-red"
              onClick={() => {
                delOperation(id);
              }}
            >
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Operation;
