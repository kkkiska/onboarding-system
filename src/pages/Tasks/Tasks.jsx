import { useCallback, useMemo, useState } from "react";
import Plate from "../../components/UI/Plate/Plate"
import { initialTasks, statusTabs } from "../../mocks/mock-data"
import StatsPanel from "../../components/Tasks/StatsPanel";
import Tabs from "../../components/Tasks/Tabs";
import TasksList from "../../components/Tasks/TasksList";
import TaskModal from "../../components/Tasks/TaskModal";

const Tasks = () => {
    const [activeTab, setActiveTab] = useState('inWork');
    const [selectedTask, setSelectedTask] = useState(null);
    const [tasks, setTasks] = useState(initialTasks);

    const filteredTasks = useMemo(
        () => tasks.filter(task => task.status === activeTab),
        [tasks, activeTab]
    );

    const handleTabChange = useCallback((tab) => setActiveTab(tab), []);
    
    const handleTaskClick = useCallback((task) => {
        setSelectedTask(task);
    }, []);
    
    const handleModalClose = useCallback(() => {
        setSelectedTask(null);
    }, []);

    const updateTaskStatus = useCallback((taskId, newStatus) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
        handleModalClose(); 
    }, [handleModalClose]);

    return (
        <>
            <Plate className="tasks">
                <StatsPanel tasks={tasks} />
                <Tabs 
                    tabs={statusTabs} 
                    activeTab={activeTab} 
                    onChange={handleTabChange} 
                />
                <TasksList tasks={filteredTasks} onTaskClick={handleTaskClick} />
            </Plate>
            <TaskModal 
                task={selectedTask} 
                onClose={handleModalClose} 
                onComplete={() => updateTaskStatus(selectedTask.id, 'waiting')}
                onReturn={() => updateTaskStatus(selectedTask.id, 'inWork')}
            />
        </>
    )
}

export default Tasks