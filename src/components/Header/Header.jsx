import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import Plate from '../../UI/Plate/Plate'
import { NavLink, Link } from "react-router-dom";
import { getNavLinkClass } from '../../utils/classNames';
import { cards } from '../../mocks/mock-data'

const Header = () => {
    console.log(cards)

    return (
        <header className={styles['header']}>
            <Link to='/home'>
                <img src={logo} className={styles["header__logo"]} />
            </Link>
            <Plate className={styles["header__nav"]}>
                {cards.map(({ path, title }) => 
                    <NavLink 
                        to={path}
                        className={(props) =>
                            getNavLinkClass(props, styles["header__nav-item"], styles["active"])
                        }
                    >
                        {title}
                    </NavLink>
                )}
                
            </Plate>
        </header>
    )
}

export default Header