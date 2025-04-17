import { useState } from "react";
import Plate from "../../components/UI/Plate/Plate";
import styles from "./Users.module.scss";
import { currentUser, departments } from "../../mocks/mock-data";
import BlueButton from "../../components/UI/Button/BlueButton";
import UsersSidebar from "../../components/Users/UsersSidebal";
import UserTable from "../../components/Users/UsersTable";
import { users } from "../../mocks/users";

const Users = () => {
  const [activeTab, setActiveTab] = useState("all");
  const isHr = currentUser.isHR();

  const filteredUsers =
    activeTab === "all"
      ? users
      : users.filter((user) => user.department === activeTab);

  return (
    <Plate className={styles["container"]}>
      {isHr && (
        <UsersSidebar
          departments={departments}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      <main className={styles["content"]}>
        {isHr && <BlueButton>Пригласить сотрудника</BlueButton>}
        <UserTable filteredUsers={filteredUsers} />
      </main>
    </Plate>
  );
};

export default Users;
