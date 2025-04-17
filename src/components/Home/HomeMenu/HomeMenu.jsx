import styles from "./HomeMenu.module.scss";
import HomeMenuCard from "./HomeMenuCard";
import { cards } from "../../../mocks/mock-data";

const HomeMenu = () => {
  return (
    <nav className={styles["navigation"]}>
      {cards.map((card, key) => (
        <HomeMenuCard key={key} {...card} />
      ))}
    </nav>
  );
};

export default HomeMenu;
