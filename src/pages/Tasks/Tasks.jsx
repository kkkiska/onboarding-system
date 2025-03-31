import { useState } from "react";
import Plate from "../../components/UI/Plate/Plate"
import { initialTasks, statusTabs } from "../../mocks/mock-data"
import StatsPanel from "./StatsPanel";

const Tasks = () => {

      const [activeTab, setActiveTab] = useState('inWork');

      const filteredTasks = initialTasks.filter(task => task.status === activeTab);

    return (
        <>
            <Plate className="tasks">
                <StatsPanel />
                <div className="tabs">
                    {statusTabs.map(tab => (
                    <button
                        key={tab.key}
                        className={`tab ${activeTab === tab.key ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </button>
                    ))}
                </div>
                <div className="tasks-list">
                    <div className="tasks-head">
                        <div className="task-name">Название задачи</div>
                        <div className="task-creation">Дата постановки</div>
                        <div className="task-deadline">Крайний срок</div>
                    </div>
                </div>
                <div className="tasks-list">
                    {filteredTasks.length > 0 ? (
                    filteredTasks.map(task => (
                        <div key={task.id} className="task-card">
                            <div className="task-name">{task.name}</div>
                            <div className="task-creation">{task.dateCreation}</div>
                            <div className="task-deadline">{task.dateDeadline}</div>
                        </div>
                    ))
                    ) : (
                    <p>Нет задач в этой категории</p>
                    )}
                </div>
            </Plate>
        </>
    )
}

export default Tasks