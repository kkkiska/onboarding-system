import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { currentUser, departments, userInfo } from "../../mocks/mock-data";
import Plate from "../../components/UI/Plate/Plate";
import styles from "./DepartmentsList.module.scss";

const DepartmentsList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.isTrainee()) {
      navigate(`/departments/${userInfo.departmentId}`);
    }
  }, [currentUser, navigate]);

  if (currentUser.isHR()) {
    return (
      <Plate className={styles["container"]}>
        <ul className={styles["list"]}>
          {departments.map((dept) => (
            <li className={styles["list-item"]} key={dept.id}>
              <Link className={styles["link"]} to={`/departments/${dept.id}`}>
                {dept.name}
              </Link>
            </li>
          ))}
        </ul>
      </Plate>
    );
  }

  return null;
};

export default DepartmentsList;
