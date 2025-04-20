import { Link, useParams } from "react-router-dom";
import Plate from "../../components/UI/Plate/Plate";
import { users } from "../../mocks/users";
import styles from "./UserPage.module.scss";
import Tasks from "../Tasks/Tasks";

const UserPage = () => {
  const { userId } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return (
      <Plate className={styles["user"]}>
        <Link to="../">⬅️ Назад</Link>
        <div className={styles["user-profile"]}>Пользователь не найден</div>
      </Plate>
    );
  }

  return (
    <>
      <Plate className={styles["user"]}>
        <Link to="../">⬅️ Назад</Link>
        <div className={styles["user-profile"]}>
          <div className={styles["user-avatar"]}>
            <img src={user.avatar} alt={user.name} />
          </div>
          <div className={styles["user-info"]}>
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Отдел:</strong> {user.department}
            </p>
            <p>
              <strong>Роль:</strong> {user.role}
            </p>
            <p>
              <strong>Дата регистрации:</strong> {user.regDate}
            </p>
          </div>
        </div>
      </Plate>
      <Tasks />
    </>
  );
};

export default UserPage;
