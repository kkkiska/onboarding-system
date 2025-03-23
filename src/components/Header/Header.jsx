import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import Plate from '../../UI/Plate/Plate'
import { NavLink, Link } from "react-router-dom";
import { getNavLinkClass } from '../../utils/classNames';

const Header = () => {
    return (
        <header className={styles['header']}>
            <Link to='/home'>
                <img src={logo} className={styles["header__logo"]} />
            </Link>
            <Plate className={styles["header__nav"]}>
                <NavLink 
                    to='/about'
                    className={(props) =>
                        getNavLinkClass(props, styles["header__nav-item"], styles["active"])
                    }
                >
                    О компании
                </NavLink>
                <NavLink 
                    to='/tasks'
                    className={(props) =>
                        getNavLinkClass(props, styles["header__nav-item"], styles["active"])
                    }
                >
                    Мои задачи
                </NavLink>
                <NavLink 
                    to='/departments'
                    className={(props) =>
                        getNavLinkClass(props, styles["header__nav-item"], styles["active"])
                    }
                >
                    Моя команда
                </NavLink>
                <NavLink 
                    to='/documents'
                    className={(props) =>
                        getNavLinkClass(props, styles["header__nav-item"], styles["active"])
                    }
                >
                    Документация
                </NavLink>
            </Plate>
        </header>
    )
}

export default Header