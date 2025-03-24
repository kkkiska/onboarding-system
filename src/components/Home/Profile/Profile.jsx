import avatar from '../../../assets/images/avatar.jpg'
import exit from '../../../assets/images/exit.svg'
import edit from '../../../assets/images/edit.svg'
import Plate from "../../../UI/Plate/Plate";
import styles from "./Profile.module.scss";
import ProfileForm from "./ProfileForm/ProfileForm";
import { userInfo } from "../../../mocks/mock-data";
import { useState } from 'react';

const Profile = () => {
    const {surname, name, position, email} = userInfo
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
                    <img className={styles["profile-user_action"]} onClick={() => setEditable(!editable)} src={edit} alt="Редактировать профиль" title='Редактировать профиль' />
                    <img className={styles["profile-user_action"]} src={exit} alt="Выход" title='Выход' />
                </div>
            </div>
            <div className={styles["profile-info"]}>
                <ProfileForm editable={editable} />
            </div>
        </Plate>
    );
}

export default Profile