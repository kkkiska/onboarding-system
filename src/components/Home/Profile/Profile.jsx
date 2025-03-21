import Button from "../../../UI/Button/Button";
import avatar from '../../../assets/images/avatar.jpg'
import exit from '../../../assets/images/exit.svg'
import Plate from "../../../UI/Plate/Plate";
import styles from "./Profile.module.scss";
import ProfileForm from "./ProfileForm/ProfileForm";

const Profile = ({ profileInfo }) => {
    const {surname, name, position, email} = profileInfo
    return (
        <Plate className={styles['profile']}>
            <div className={styles['profile-user']}>
                <div className={styles['profile-user_wrapper']}>
                    <img src={avatar} alt="Аватар" className={styles["profile-user_avatar"]} />
                    <div className={styles["profile-user_info"]}>
                        <div className={styles["profile-user_info-name"]}>{surname} {name}</div>
                        <div className={styles["profile-user_info-subinfo"]}>{position}</div>
                        <div className={styles["profile-user_info-subinfo"]}>{email}</div>
                    </div>
                </div>
                <img className={styles["profile-user_exit"]} src={exit} alt="Выход" title='Выход' />
            </div>
            <div className={styles["profile-info"]}>
                <ProfileForm />
            </div>
        </Plate>
    );
}

export default Profile