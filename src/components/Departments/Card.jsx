import styles from "../../pages/Departments/Department.module.scss"
import avatar from "../../assets/images/avatar.png"

const Card = ({ type }) => {
    return (
        <div className={styles[`${type}`]}>
            <img src={avatar} alt="" className={styles["avatar"]} />
            <div className={styles["card-info"]}>
                <div className={styles["card-info-name"]}>Шевцов Алексей</div>
                <div className={styles["card-info-addition"]}>Начальник отдела программирования</div>
                <div className={styles["card-info-addition"]}>ashevcov@ntec.by</div>
            </div>
        </div>
    );
}

export default Card