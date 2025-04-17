import styles from "./TextInput.module.scss";

const TextInput = ({
  type = "text",
  placeholder = "",
  value,
  error,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles["textinput"]} ${className}`}
        {...rest}
      />
      {error && (
        <p className={styles["login__error"]}>{errors.email.message}</p>
      )}
    </>
  );
};

export default TextInput;
