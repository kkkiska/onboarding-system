import Plate from "../UI/Plate/Plate"
import styles from "../../pages/Departments/Department.module.scss"
import Card from "./Card"
import { roleTitles } from "../../mocks/mock-data"

const Structure = ({ employees, onUserClick }) => {
    const roleGroups = Object.entries({
        head: employees.head,
        mentors: employees.mentors,
        others: employees.others
      });
    return (
        <Plate className={styles["structure"]}>
            <div className={styles["structure-title"]}>Состав отдела</div>
            <div className={styles["structure-content"]}>
                {roleGroups.map(([role, employees]) => (
                    <div key={role} className={styles["structure-list"]}>
                    <div className={styles["structure-list-title"]}>
                        {roleTitles[role]}
                    </div>
                    {employees.map(employee => (
                        <Card 
                        key={employee.email}
                        employee={employee}
                        onUserClick={onUserClick}
                        />
                    ))}
                    </div>
                ))}
            </div>
        </Plate>
    )
}

export default Structure