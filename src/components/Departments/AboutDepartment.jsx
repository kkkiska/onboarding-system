import Plate from "../UI/Plate/Plate"
import styles from "../../pages/Departments/Department.module.scss"
import teamImg from "../../assets/images/team.png"

const AboutDepartment = ({ departmentName, description }) => {
    return (
        <Plate className={styles["about"]}>
            <div className={styles["title"]}>
                {departmentName}
            </div>
            <div className={styles["content"]}>
                <img src={teamImg} alt="" />
                <div className={styles["info"]}>
                    <div className={styles["info-title"]}>Об отделе</div>
                    <div className={styles["info-text"]}>{description}</div>
                </div>
            </div>
        </Plate>
    )
}

export default AboutDepartment