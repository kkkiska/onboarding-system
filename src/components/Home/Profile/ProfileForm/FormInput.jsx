import styles from "./ProfileForm.module.scss";

const FormInput = ({ id, type, label, value, onChange }) => (
  <div className={styles["form-group"]}>
    <label className={styles["form-label"]} htmlFor={id}>
      {label}
    </label>
    <input
      className={styles["form-input"]}
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default FormInput;
