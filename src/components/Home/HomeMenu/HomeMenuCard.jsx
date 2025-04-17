import { Link } from "react-router";
import styles from "./HomeMenu.module.scss";
import Plate from "../../UI/Plate/Plate";

const HomeMenuCard = ({ title, subtitle, img, path }) => {
  return (
    <Link to={path}>
      <Plate className={styles["navigation-button"]} key={title}>
        <img src={img} alt="" />
        <div className={styles["navigation-button-title"]}>{title}</div>
        <div className={styles["navigation-button-subtitle"]}>{subtitle}</div>
      </Plate>
    </Link>
  );
};

export default HomeMenuCard;
