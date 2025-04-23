import styles from "../../pages/Departments/Department.module.scss";

const Card = ({ employee, onUserClick }) => {
  return (
    <div
      onClick={() => onUserClick(employee)}
      className={styles[`${employee.role}`]}
    >
      <img
        src={employee.avatar}
        alt={employee.name}
        className={styles["avatar"]}
      />
      <div className={styles["card-info"]}>
        <div className={styles["card-info-name"]}>{employee.name}</div>
        <div className={styles["card-info-addition"]}>{employee.position}</div>
        <div className={styles["card-info-addition"]}>{employee.email}</div>
      </div>
    </div>
  );
};

export default Card;
