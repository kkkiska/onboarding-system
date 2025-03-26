import styles from './ProfileForm.module.scss';

const FormTextarea = ({ id, label, value, onChange }) => (
  <div className={styles["form-group"]}>
    <label className={styles["form-label"]} htmlFor={id}>
      {label}
    </label>
    <textarea
      className={styles["form-textarea"]}
      id={id}
      rows="3"
      placeholder="Расскажите немного о себе..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default FormTextarea;