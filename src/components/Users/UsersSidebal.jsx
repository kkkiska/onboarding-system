import styles from "../../pages/Users/Users.module.scss";

const UsersSidebar = ({ departments, activeTab, setActiveTab }) => {
  return (
    <aside className={styles["sidebar"]}>
      <h3 className={styles["sidebar-title"]}>Отделы</h3>
      <nav>
        <ul className={styles["departments-list"]}>
          {departments.map((dept) => (
            <li key={dept.id}>
              <button
                className={`${styles["department-tab"]} ${
                  activeTab === dept.id ? styles["active"] : ""
                }`}
                onClick={() => setActiveTab(dept.id)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default UsersSidebar;
