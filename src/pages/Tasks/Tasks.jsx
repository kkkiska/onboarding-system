import { useState } from "react";
import Plate from "../../components/UI/Plate/Plate"
import { initialTasks, statusTabs } from "../../mocks/mock-data"
import StatsPanel from "./StatsPanel";
import Tabs from "./Tabs";
import TasksList from "./TasksList";

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