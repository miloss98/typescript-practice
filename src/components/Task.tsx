import { TaskListInterface } from "./../interfaces/taskListInterface";
import "./../styles/task.css";
import remove_icon from "./../assets/images/remove.png";
interface Props {
  tasks: TaskListInterface;
}

const Task = ({ tasks }: Props) => {
  return (
    <div className="single-task-container">
      <div className="task-container">
        <p className="task-name">{tasks.task}</p>
      </div>
      <div className="deadline-container">
        <p className="deadline"> {tasks.deadline} day(s)</p>
      </div>
      <button className="remove-btn">
        <img className="remove-icon" src={remove_icon} alt="remove" />
      </button>
    </div>
  );
};

export default Task;
