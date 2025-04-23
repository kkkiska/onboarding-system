import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Plate from "../../components/UI/Plate/Plate";
import styles from "./DepartmentsList.module.scss";
import { company } from "../../mocks/mockData";

const DepartmentsList = () => {
  const navigate = useNavigate();
  const departments = company.getDepartments();
  const currentUser = company.currentUser;

  useEffect(() => {
    if (!company.hasRole("hr")) {
      navigate(`/departments/${currentUser.departmentId}`);
    }
  }, [currentUser, navigate]);

  if (company.hasRole("hr")) {
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
