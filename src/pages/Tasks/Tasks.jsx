import { useState } from "react";
import Plate from "../../components/UI/Plate/Plate"
import { initialTasks } from "../../mocks/mock-data"

const Tasks = () => {
    const statusTabs = [
        { 
            key: 'inWork', 
            label: 'В работе' 
        },
        { 
            key: 'waiting', 
            label: 'Ожидающие контроля' 
        },
        { 
            key: 'overdue', 
            label: 'Просроченные' 
        },
        { 
            key: 'completed', 
            label: 'Завершенные' 
        }
      ];

      const [activeTab, setActiveTab] = useState('inWork');

      const filteredTasks = initialTasks.filter(task => task.status === activeTab);

    return (
        <>
            <Plate className="tasks">
                <div className="stats-panel">
                    <div className="stats-item">Всего задач: 15</div>
                    <div className="stats-item">В работе: 4</div>
                    <div className="stats-item">Ожидающие контроля: 3</div>
                    <div className="stats-item">Просроченные: 1</div>
                    <div className="stats-item">Завершенные: 7</div>
                </div>
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