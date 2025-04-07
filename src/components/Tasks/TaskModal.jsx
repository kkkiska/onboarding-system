import Modal from "../Modal";
import BlueButton from "../UI/Button/BlueButton";
import { statusTabs } from "../../mocks/mock-data";

const TaskModal = ({ task, onClose }) => {
    if (!task) return null;
    console.log(task)

    const CompleteTask = () => {
        onClose()
    }

    return (
      <Modal closeModal={onClose}>
        <div className="task-modal">
          <h2 className="task-modal-name">{task.name}</h2>
          <div className="task-modal-descr">{task.description}</div>
          <div className="task-modal-date">Дата постановки: {task.dateCreation}</div>
          <div className="task-modal-date">Крайний срок: {task.dateDeadline}</div>
          <div className="task-modal-interaction">
            {(task.status === 'inWork' || task.status === 'overdue') 
                ? <BlueButton onClick={CompleteTask}>Завершить</BlueButton>
                : <div>Статус: {statusTabs.filter((tab) => tab.key === task.status)[0].label}</div>}
          </div>
        </div>
      </Modal>
    );
};

export default TaskModal