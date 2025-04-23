import { useState } from "react";
import Plate from "../../components/UI/Plate/Plate";
import styles from "./Users.module.scss";
import { currentUser } from "../../mocks/mock-data";
import BlueButton from "../../components/UI/Button/BlueButton";
import UsersSidebar from "../../components/Users/UsersSidebal";
import UserTable from "../../components/Users/UsersTable";
import { users } from "../../mocks/users";
import { company } from "../../mocks/mockData";

const Users = () => {
  const currentUser = company.currentUser;
  const [activeTab, setActiveTab] = useState(() => {
    return company.hasRole("hr") ? currentUser.departmentId : "nobar";
  });
  const isHr = company.hasRole("hr");
  const departments = company.getDepartments();
  let filteredUsers;
  if (activeTab !== "nobar") {
    filteredUsers = company.getEmployees({
      departmentId: activeTab,
    });
  } else {
    filteredUsers = currentUser.getSubordinates(company);
    console.log(filteredUsers);
  }

  console.log(filteredUsers);

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
