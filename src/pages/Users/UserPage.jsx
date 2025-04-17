import { useParams } from "react-router-dom";
import Plate from "../../components/UI/Plate/Plate";
import { users } from "../../mocks/users";

const UserPage = () => {
  const { userId } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return (
      <Plate>
        <div>Пользователь не найден</div>
      </Plate>
    );
  }

  return (
    <Plate>
      <div className="user-profile">
        <div className="user-avatar">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="user-info">
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
  );
};

export default UserPage;
