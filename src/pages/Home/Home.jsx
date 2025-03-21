import Plate from '../../UI/Plate/Plate';
import logo from '../../assets/images/logo.png'
import Button from '../../UI/Button/Button';
import styles from './Home.module.scss'
import { User } from '../../mocks/mock-data';
import Profile from '../../components/Home/Profile/Profile';
import HomeMenu from '../../components/Home/HomeMenu/HomeMenu';

const Home = () => {
    const currentUser = new User('trainee')
    return (
        <div className={styles['home']}> 
            <img src={logo} alt="" className={styles['home__logo']} />
            <div className={styles['home__content']}>
                <Profile 
                    profileInfo={currentUser.getUserInfo()}
                />
                <div className={styles["home__right"]}>
                    <div className={styles["home__greetings"]}>Добро пожаловать, <div className={styles['home__greetings--primary']}>Иван!</div></div>
                    <HomeMenu menuCards={currentUser.getCards()} />
                </div>
            </div>
        </div>
    );
};

export default Home;