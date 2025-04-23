import { useCallback, useMemo, useState } from "react";
import Plate from "../../components/UI/Plate/Plate";
import { statusTabs } from "../../mocks/mock-data";
import StatsPanel from "../../components/Tasks/StatsPanel";
import Tabs from "../../components/Tasks/Tabs";
import TasksList from "../../components/Tasks/TasksList";
import TaskModal from "../../components/Tasks/TaskModal";
import { company } from "../../mocks/mockData";
import BlueButton from "../../components/UI/Button/BlueButton";
import AddTaskModal from "../../components/Tasks/AddTaskModal";

const Tasks = ({ userId = undefined }) => {
  const [activeTab, setActiveTab] = useState("inWork");
  const [selectedTask, setSelectedTask] = useState(null);
  const tasksData =
    company.currentUser?.tasks ?? company.getEmployee(parseInt(userId)).tasks;
  const [tasks, setTasks] = useState(tasksData);
  const [addTaskClicked, addTaskHandler] = useState(false);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === activeTab),
    [tasks, activeTab]
  );

  const handleTabChange = useCallback((tab) => setActiveTab(tab), []);

  const handleTaskClick = useCallback((task) => {
    setSelectedTask(task);
  }, []);

  const handleModalClose = useCallback((setState) => {
    setState(null);
  }, []);

  const updateTaskStatus = useCallback((taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }, []);

  const handleAddTask = useCallback(
    (newTask) => {
      company.getEmployee(parseInt(userId)).addTask(newTask);

      setTasks([...company.getEmployee(parseInt(userId)).tasks]);
    },
    [userId]
  );

  const completeTask = () => {
    if (selectedTask.status === "inWork") {
      updateTaskStatus(selectedTask.id, "waiting");
    } else {
      updateTaskStatus(selectedTask.id, "completed");
    }
    handleModalClose(setSelectedTask);
  };

  return (
    <>
      <Plate className="tasks">
        <StatsPanel tasks={tasks} />
        <Tabs
          tabs={statusTabs}
          activeTab={activeTab}
          onChange={handleTabChange}
        />
        {(company.hasRole("mentor") || company.hasRole("head")) && (
          <BlueButton
            className="task-add"
            onClick={() => {
              addTaskHandler(true);
            }}
          >
            Добавить задачу
          </BlueButton>
        )}
        <TasksList tasks={filteredTasks} onTaskClick={handleTaskClick} />
      </Plate>
      <TaskModal
        task={selectedTask}
        onClose={() => {
          handleModalClose(setSelectedTask);
        }}
        onComplete={() => {
          completeTask();
        }}
        onReturn={() => {
          updateTaskStatus(selectedTask.id, "inWork");
          handleModalClose(setSelectedTask);
        }}
      />
      {addTaskClicked && (
        <AddTaskModal
          onClose={() => {
            handleModalClose(addTaskHandler);
          }}
          userId={userId}
          onAddTask={handleAddTask}
        />
      )}
    </>
  );
};

export default Tasks;
