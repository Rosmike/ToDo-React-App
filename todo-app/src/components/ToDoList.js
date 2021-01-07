import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";

const ToDoList = ({ tasks, delTask, finishTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDo
          key={task.id}
          task={task}
          delTask={delTask}
          finishTask={finishTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
