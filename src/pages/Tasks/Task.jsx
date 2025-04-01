const Task = ({name, dateCreation, dateDeadline}) => {
    return (
        <div className="task-card">
            <div className="task-name">{name}</div>
            <div className="task-creation">{dateCreation}</div>
            <div className="task-deadline">{dateDeadline}</div>
          </div>
    );
}

export default Task