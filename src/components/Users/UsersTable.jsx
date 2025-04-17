import styles from "../../pages/Users/Users.module.scss";
import User from "./User";

const UserTable = ({ filteredUsers }) => {
  return (
    <div className={styles["users-table"]}>
      <div className={styles["table-header"]}>
        <div className={styles["col-avatar"]}></div>
        <div className={styles["col-name"]}>ФИО</div>
        <div className={styles["col-dept"]}>Отдел</div>
        <div className={styles["col-role"]}>Роль</div>
        <div className={styles["col-regDate"]}>Дата регистрации</div>
      </div>

      {filteredUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserTable;
