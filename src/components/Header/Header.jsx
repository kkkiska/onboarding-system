import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import Plate from '../../UI/Plate/Plate'
import { NavLink, Link } from "react-router-dom";
import { getNavLinkClass } from '../../utils/classNames';
import { cards, userInfo } from '../../mocks/mock-data'
import exit from '../../assets/images/exit.svg'

const Header = () => {
    const { surname, name, avatar} = userInfo
    return (
        <header className={styles['header']}>
            <Link to='/home'>
                <img src={logo} className={styles["header__logo"]} />
            </Link>
            <Plate className={styles["header__nav"]}>
                {cards.map(({ path, title }, key) => 
                    <NavLink 
                        key={key}
                        to={path}
                        className={(props) =>
                            getNavLinkClass(props, styles["header__nav-item"], styles["active"])
                        }
                    >
                        {title}
                    </NavLink>
                )}
                
            </Plate>
            <Plate className={styles['profile']}>
                <Link to='/home' className={styles["profile-info"]}>
                    <img className={styles['profile-avatar']} src={avatar} alt="" />
                    <div className={styles["profile-name"]}>{surname} {name}</div>
                </Link>
                <button 
                    className={styles["profile-user_action"]} 
                    aria-label="Выйти из системы"
                    title="Выйти из системы"
                >
                    <img src={exit} alt="" aria-hidden="true" />
                </button>
            </Plate>
        </header>
    )
}

export default Header