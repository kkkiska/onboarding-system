import { company } from "../../mocks/mockData";
import Modal from "../Modal";
import BlueButton from "../UI/Button/BlueButton";

const TaskModal = ({ task, onClose, onComplete, onReturn }) => {
  if (!task) return null;

  return (
    <Modal closeModal={onClose}>
      <div className="task-modal">
        <h2 className="task-modal-name">{task.name}</h2>
        <div className="task-modal-descr">{task.description}</div>
        <div className="task-modal-date">
          Дата постановки: {task.dateCreation}
        </div>
        <div className="task-modal-date">Крайний срок: {task.dateDeadline}</div>
        <div className="task-modal-interaction">
          {(task.status === "inWork" || task.status === "overdue") &&
            company.hasRole("trainee") && (
              <BlueButton onClick={onComplete}>Завершить</BlueButton>
            )}
          {task.status === "waiting" && company.hasRole("trainee") && (
            <BlueButton onClick={onReturn}>Вернуть в работу</BlueButton>
          )}
          {task.status === "waiting" && company.hasRole("mentor") && (
            <BlueButton onClick={onComplete}>Закрыть задачу</BlueButton>
          )}
          {task.status === "completed" && <div>Задача завершена</div>}
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
