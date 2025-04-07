import { useCallback, useMemo, useState } from "react";
import Plate from "../../components/UI/Plate/Plate"
import { initialTasks, statusTabs } from "../../mocks/mock-data"
import StatsPanel from "../../components/Tasks/StatsPanel";
import Tabs from "../../components/Tasks/Tabs";
import TasksList from "../../components/Tasks/TasksList";
import Modal from "../../components/Modal";
import TaskModal from "../../components/Tasks/TaskModal";

const Tasks = () => {
    const [activeTab, setActiveTab] = useState('inWork');
    const [selectedTask, setSelectedTask] = useState(null);

    const filteredTasks = useMemo(
        () => initialTasks.filter(task => task.status === activeTab),
        [activeTab]
    );

    const handleTabChange = useCallback((tab) => setActiveTab(tab), []);
    
    const handleTaskClick = useCallback((task) => {
        setSelectedTask(task);
    }, []);
    
    const handleModalClose = useCallback(() => {
        setSelectedTask(null);
    }, []);

    return (
        <>
            <Plate className="tasks">
                <StatsPanel />
                <Tabs 
                    tabs={statusTabs} 
                    activeTab={activeTab} 
                    onChange={handleTabChange} 
                />
                <TasksList tasks={filteredTasks} onTaskClick={handleTaskClick} />
            </Plate>
            <TaskModal task={selectedTask} onClose={handleModalClose} />
        </>
    )
}

export default Tasks