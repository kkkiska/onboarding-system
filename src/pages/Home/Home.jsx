import logo from "../../assets/images/logo.png";
import styles from "./Home.module.scss";
import Profile from "../../components/Home/Profile/Profile";
import HomeMenu from "../../components/Home/HomeMenu/HomeMenu";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <img src={logo} alt="" className={styles["home__logo"]} />
      <div className={styles["home__content"]}>
        <Profile />
        <div className={styles["home__right"]}>
          <div className={styles["home__greetings"]}>
            Добро пожаловать,{" "}
            <div className={styles["home__greetings--primary"]}>Иван!</div>
          </div>
          <HomeMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
