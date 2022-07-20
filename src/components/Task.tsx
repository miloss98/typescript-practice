import { TaskListInterface } from "./../interfaces/taskListInterface";

interface Props {
  tasks: TaskListInterface;
}

const Task = ({ tasks }: Props) => {
  return (
    <div>
      <p>{tasks.task}</p>
      <p> {tasks.deadline}</p>
    </div>
  );
};

export default Task;
