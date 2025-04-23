import Modal from "../Modal";
import FormInput from "../Home/Profile/ProfileForm/FormInput";
import FormTextArea from "../Home/Profile/ProfileForm/FormTextarea";
import BlueButton from "../UI/Button/BlueButton";
import { useState } from "react";
import { company } from "../../mocks/mockData";

const AddTaskModal = ({ onClose, userId, onAddTask }) => {
  console.log();
  const [taskName, setTaskName] = useState("");
  const [taskDescr, setTaskDescr] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const user = company.getEmployee(parseInt(userId));
    const taskId =
      "" + user.id + String(user.tasks.length + 1).padStart(2, "0");
    const newTask = {
      id: parseInt(taskId),
      name: taskName,
      description: taskDescr,
      dateDeadline: new Date(taskDate).toISOString(),
    };
    onAddTask(newTask);
    onClose();
  };

  return (
    <Modal closeModal={onClose}>
      <div className="add-task">
        <h2>Добавить задачу</h2>
        <form
          className="add-task-form"
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <FormInput
            label="Название задачи"
            value={taskName}
            onChange={setTaskName}
          />
          <FormTextArea
            label="Описание задачи"
            value={taskDescr}
            onChange={setTaskDescr}
          />
          <FormInput
            label="Крайний срок"
            type="date"
            value={taskDate}
            onChange={setTaskDate}
          />
          <BlueButton className="add-task-button" type="submit">
            Создать задачу
          </BlueButton>
        </form>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
