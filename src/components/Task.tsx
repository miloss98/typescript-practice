import { TaskListInterface } from "./../interfaces/taskListInterface";
import "./../styles/task.css";
import remove_icon from "./../assets/images/remove.png";
interface Props {
  tasks: TaskListInterface;
  removeTask(taskNameToDelete: string): void;
}

const Task = ({ tasks, removeTask }: Props) => {
  return (
    <div className="single-task-container">
      <div className="task-container">
        <p className="task-name">{tasks.task}</p>
      </div>
      <div className="deadline-container">
        <p className="deadline"> {tasks.deadline} day(s)</p>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            removeTask(tasks.task);
          }}
          className="remove-btn"
        >
          <img className="remove-icon" src={remove_icon} alt="remove" />
        </button>
      </div>
    </div>
  );
};

export default Task;
