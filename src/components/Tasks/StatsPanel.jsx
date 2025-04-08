const StatsPanel = ({ tasks }) => {
    const counts = tasks.reduce((acc, task) => {
      acc.total++;
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, { 
      total: 0,
      inWork: 0,
      waiting: 0,
      overdue: 0,
      completed: 0
    });
  
    return (
      <div className="stats-panel">
        <div className="stats-item">Всего задач: {counts.total}</div>
        <div className="stats-item">В работе: {counts.inWork}</div>
        <div className="stats-item">Ожидающие контроля: {counts.waiting}</div>
        <div className="stats-item">Просроченные: {counts.overdue}</div>
        <div className="stats-item">Завершенные: {counts.completed}</div>
      </div>
    );
  };

  export default StatsPanel;