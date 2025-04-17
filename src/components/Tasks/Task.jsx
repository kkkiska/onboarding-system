const Task = ({ name, dateCreation, dateDeadline, onClick }) => {
  return (
    <div className="task-card">
      <div className="task-name">
        <span onClick={onClick}>{name}</span>
      </div>
      <div className="task-creation">{dateCreation}</div>
      <div className="task-deadline">{dateDeadline}</div>
    </div>
  );
};

export default Task;
