const Tabs = ({ tabs, activeTab, onChange }) => (
  <div className="tabs">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        className={`tab ${activeTab === tab.key ? "active" : ""}`}
        onClick={() => onChange(tab.key)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default Tabs;
