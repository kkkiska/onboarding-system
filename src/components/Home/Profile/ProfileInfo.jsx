import styles from "./Profile.module.scss";
import { userInfo } from "../../../mocks/mock-data";

const ProfileInfo = () => {

    const {surname, name, position, email, avatar} = userInfo

    return (
        <div className={styles['profile-user_wrapper']}>
            <img src={avatar} alt="Аватар" className={styles["profile-user_avatar"]} />
            <div className={styles["profile-user_info"]}>
                <div className={styles["profile-user_info-name"]}>{surname} {name}</div>
                <div className={styles["profile-user_info-subinfo"]}>{position}</div>
                <div className={styles["profile-user_info-subinfo"]}>{email}</div>
            </div>
        </div>
    )
}

export default ProfileInfo