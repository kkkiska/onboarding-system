import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { getNavLinkClass } from "../../utils/classNames";
import { cards, userInfo } from "../../mocks/mock-data";
import exit from "../../assets/images/exit.svg";
import Plate from "../UI/Plate/Plate";
import ExitButton from "../ExitButton";

const Header = () => {
  const { surname, name, avatar } = userInfo;

  return (
    <header className={styles["header"]}>
      <Link to="/home">
        <img src={logo} className={styles["header__logo"]} />
      </Link>

      <Plate className={styles["header__nav"]}>
        {cards.map(({ path, title }, key) => (
          <NavLink
            key={key}
            to={path}
            className={(props) =>
              getNavLinkClass(
                props,
                styles["header__nav-item"],
                styles["active"],
              )
            }
          >
            {title}
          </NavLink>
        ))}
      </Plate>

      <Plate className={styles["profile"]}>
        <Link to="/home" className={styles["profile-info"]}>
          <img className={styles["profile-avatar"]} src={avatar} alt="" />
          <div className={styles["profile-name"]}>
            {surname} {name}
          </div>
        </Link>
        <ExitButton />
      </Plate>
    </header>
  );
};

export default Header;
