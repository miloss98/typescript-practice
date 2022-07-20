import React, { useState, ChangeEvent } from "react";
import Task from "./Task";
import "./../styles/tasks.css";
import { TaskListInterface } from "./../interfaces/taskListInterface";

const Tasks: React.FC = () => {
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
  const removeTask = (taskNameToDelete: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.task !== taskNameToDelete;
      })
    );
  };
  return (
    <div className="container">
      <section className="header">
        <h1 className="title">Tasks app</h1>
      </section>
      <section className="main-content">
        <div className="inputs-container">
          <input
            type="text"
            className="inputs-task"
            name="task"
            value={task}
            placeholder="task name here"
            onChange={handleInput}
          />
          <input
            type="number"
            className="inputs-deadline"
            value={deadline}
            placeholder="deadline"
            onChange={handleInput}
          />
          <button onClick={addTask} className="add-task-btn">
            {" "}
            add task
          </button>
        </div>
        <div className="tasks-container">
          <h1 className="list-title">List of tasks </h1>
          <div className="categories">
            <p className="category">Task</p>
            <p className="category"> Deadline</p>
          </div>
          {taskList.map((task: TaskListInterface, key: number) => {
            return <Task removeTask={removeTask} tasks={task} key={key} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Tasks;
