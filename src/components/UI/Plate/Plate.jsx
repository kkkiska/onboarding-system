import styles from "./Plate.module.scss";

const Plate = ({ children, className = "" }) => {
  return <div className={`${styles["plate"]} ${className}`}>{children}</div>;
};

export default Plate;
