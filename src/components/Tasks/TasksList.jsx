import Task from "./Task";

const TasksList = ({ tasks, onTaskClick }) => (
  <div className="tasks-list">
    <div className="tasks-head">
      <div className="task-name">Название задачи</div>
      <div className="task-creation">Дата постановки</div>
      <div className="task-deadline">Крайний срок</div>
    </div>

    {tasks.length > 0 ? (
      tasks.map((task, key) => (
        <Task key={key} {...task} onClick={() => onTaskClick(task)} />
      ))
    ) : (
      <p className="no-tasks">Нет задач в этой категории</p>
    )}
  </div>
);

export default TasksList;
