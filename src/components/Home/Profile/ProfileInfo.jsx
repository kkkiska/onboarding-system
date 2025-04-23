import styles from "./Profile.module.scss";
import { userInfo } from "../../../mocks/mock-data";
import { company } from "../../../mocks/mockData";

const ProfileInfo = () => {
  console.log(company.currentUser);
  const { name, position, email, avatar } = company.currentUser;

  return (
    <div className={styles["profile-user_wrapper"]}>
      <img
        src={avatar}
        alt="Аватар"
        className={styles["profile-user_avatar"]}
      />
      <div className={styles["profile-user_info"]}>
        <div className={styles["profile-user_info-name"]}>{name}</div>
        <div className={styles["profile-user_info-subinfo"]}>{position}</div>
        <div className={styles["profile-user_info-subinfo"]}>{email}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
