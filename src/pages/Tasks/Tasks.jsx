import { useState } from "react";
import Plate from "../../components/UI/Plate/Plate"
import { initialTasks, statusTabs } from "../../mocks/mock-data"
import StatsPanel from "../../components/Tasks/StatsPanel";
import Tabs from "../../components/Tasks/Tabs";
import TasksList from "../../components/Tasks/TasksList";

const Tasks = () => {

      const [activeTab, setActiveTab] = useState('inWork');

      const filteredTasks = initialTasks.filter(task => task.status === activeTab);

    return (
        <>
            <Plate className="tasks">
                <StatsPanel />
                <Tabs 
                    tabs={statusTabs} 
                    activeTab={activeTab} 
                    onChange={setActiveTab} 
                />
                <TasksList tasks={filteredTasks} />
            </Plate>
        </>
    )
}

export default Tasks