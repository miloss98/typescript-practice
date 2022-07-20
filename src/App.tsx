import React, { useState, ChangeEvent } from "react";
import Task from "./components/Task";
import "./App.css";
import { TaskListInterface } from "./interfaces/taskListInterface";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [taskList, setTaskList] = useState<TaskListInterface[]>([]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(parseInt(event.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { task: task, deadline: deadline };
    setTaskList([...taskList, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="container">
      <section className="header">
        <h1 className="title">typescript practice</h1>
      </section>
      <section className="main-content">
        <div className="inputs-container">
          <article className="task-container"></article>
          <label htmlFor="task"> Task: </label>
          <input
            type="text"
            className="inputs"
            name="task"
            value={task}
            onChange={handleInput}
          />
          <label htmlFor="deadline"> Deadline: </label>
          <input
            type="number"
            className="inputs"
            value={deadline}
            onChange={handleInput}
          />
          <button onClick={addTask} className="add-task-btn">
            {" "}
            add task
          </button>
        </div>
        <div className="tasks-container">
          {taskList.map((task: TaskListInterface, key: number) => {
            return <Task tasks={task} key={key} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
