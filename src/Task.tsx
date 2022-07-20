import React from "react";
import { TaskListInterface } from "./App";

interface Props {
  tasks: TaskListInterface;
}

const Task: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      <p>{tasks.task}</p>
      <p> {tasks.deadline}</p>
    </div>
  );
};

export default Task;
