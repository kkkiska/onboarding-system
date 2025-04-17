import { Link } from "react-router-dom";
import styles from "../../pages/Users/Users.module.scss";

const User = ({ user }) => {
  return (
    <Link to={`${user.id}`} className={styles["table-row"]}>
      <div className={styles["col-avatar"]}>
        <img src={user.avatar} alt={user.name} className={styles["avatar"]} />
      </div>
      <div className={styles["col-name"]}>
        <div className={styles["user-name"]}>{user.name}</div>
        <div className={styles["user-email"]}>{user.email}</div>
      </div>
      <div className={styles["col-dept"]}>
        <span className={styles["department-badge"]}>{user.department}</span>
      </div>
      <div className={styles["col-role"]}>
        <span className={styles["role-badge"]}>{user.role}</span>
      </div>
      <div className={styles["col-regDate"]}>{user.regDate}</div>
    </Link>
  );
};

export default User;
