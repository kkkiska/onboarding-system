import styles from "./ProfileForm.module.scss";
import ViewField from "./ViewField";

const ViewForm = ({ formData }) => (
  <div className={styles["form"]}>
    <ViewField label="Номер телефона" value={formData.phoneNumber} />
    <ViewField label="Дата рождения" value={formData.birthDate} />
    <ViewField label="О себе" value={formData.about} isArea={true} />
  </div>
);

export default ViewForm;
