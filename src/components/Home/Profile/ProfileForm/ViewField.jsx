import styles from './ProfileForm.module.scss';

const ViewField = ({ label, value, isArea = false }) => (
  <div className={styles["form-group"]}>
    <div className={styles["form-label"]}>{label}</div>
    <div 
      className={isArea ? styles["form-textarea"] : styles["form-input"]}
      title="Нажмите на карандаш выше, чтобы редактировать"
    >
      <div className={styles["form-value"]}>
        {value || 'Не указано'}
      </div>
    </div>
  </div>
);

export default ViewField;