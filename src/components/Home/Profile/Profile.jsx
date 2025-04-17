import exit from "../../../assets/images/exit.svg";
import edit from "../../../assets/images/edit.svg";
import Plate from "../../UI/Plate/Plate";
import styles from "./Profile.module.scss";
import ProfileForm from "./ProfileForm/ProfileForm";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import Button from "../../UI/Button/Button";
import ExitButton from "../../ExitButton";

const Profile = () => {
  const [editable, setEditable] = useState(false);

  return (
    <Plate className={styles["profile"]}>
      <div className={styles["profile-user"]}>
        <ProfileInfo />
        <div className="profile-user_actions">
          <Button
            onClick={() => setEditable(!editable)}
            aria-label={
              editable ? "Отменить редактирование" : "Редактировать профиль"
            }
            title={
              editable ? "Отменить редактирование" : "Редактировать профиль"
            }
          >
            <img src={edit} alt="Иконка редактирования" aria-hidden="true" />
          </Button>

          <ExitButton />
        </div>
      </div>

      <div className={styles["profile-info"]}>
        <ProfileForm editable={editable} setEditable={setEditable} />
      </div>
    </Plate>
  );
};

export default Profile;
