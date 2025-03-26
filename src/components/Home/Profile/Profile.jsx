import exit from '../../../assets/images/exit.svg'
import edit from '../../../assets/images/edit.svg'
import Plate from "../../../UI/Plate/Plate";
import styles from "./Profile.module.scss";
import ProfileForm from "./ProfileForm/ProfileForm";
import { userInfo } from "../../../mocks/mock-data";
import { useState } from 'react';

const Profile = () => {
    const {surname, name, position, email, avatar} = userInfo
    const [editable, setEditable] = useState(false)
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
                <div className="profile-user_actions">
                    <button 
                        className={styles["profile-user_action"]} 
                        onClick={() => setEditable(!editable)}
                        aria-label={editable ? "Отменить редактирование" : "Редактировать профиль"}
                        title={editable ? "Отменить редактирование" : "Редактировать профиль"}
                    >
                        <img src={edit} alt="" aria-hidden="true" />
                    </button>
                    <button 
                        className={styles["profile-user_action"]} 
                        aria-label="Выйти из системы"
                        title="Выйти из системы"
                    >
                        <img src={exit} alt="" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <div className={styles["profile-info"]}>
                <ProfileForm editable={editable} setEditable={setEditable} />
            </div>
        </Plate>
    );
}

export default Profile