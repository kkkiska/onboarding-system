import Button from "./Button";
import styles from "./BlueButton.module.scss";

const BlueButton = (props) => {
  return (
    <Button
      {...props}
      className={`${styles["button"]} ${props.className || ""}`}
    />
  );
};

export default BlueButton;
