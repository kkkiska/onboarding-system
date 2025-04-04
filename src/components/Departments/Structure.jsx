import Plate from "../UI/Plate/Plate"
import styles from "../../pages/Departments/Department.module.scss"
import Card from "./Card"

const Structure = () => {
    return (
        <Plate className={styles["structure"]}>
            <div className={styles["structure-title"]}>Состав отдела</div>
            <div className={styles["structure-content"]}>
                <div className={styles["structure-list"]}>
                    <div className={styles["structure-list-title"]}>Руководитель</div>
                    <Card type='head'/>
                </div>
                <div className={styles["structure-list"]}>
                    <div className={styles["structure-list-title"]}>Менторы</div>
                    <Card type='mentor'/>
                    <Card type='mentor'/>
                </div>
                <div className={styles["structure-list"]}>
                    <div className={styles["structure-list-title"]}>Остальные сотрудники</div>
                    <Card type='other'/>
                    <Card type='other'/>
                    <Card type='other'/>
                </div>
            </div>
        </Plate>
    )
}

export default Structure