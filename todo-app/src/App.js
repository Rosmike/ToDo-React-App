import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getTasks, addTask, delTask, editTask } from "./components/tasks";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import "./styles/App.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [reloading, reloadTasks] = useState(false);

  useEffect(() => {
    getTasks(setTasks);
  }, [reloading]);

  return !tasks ? (
    <h1>loading...</h1>
  ) : (
    <div className="page-wrapper">
      <AddToDo addTask={(body) => addTask(reloadTasks, body)} />
      <ToDoList
        tasks={tasks}
        delTask={(id) => {
          delTask(reloadTasks, id);
        }}
        finishTasl={(task) =>
          editTask(reloadTasks, task.id, { ...task, status: "closed" })
        }
      />
    </div>
  );
};

export default App;
