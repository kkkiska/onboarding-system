import Plate from '../../UI/Plate/Plate';
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.jpg'
import exit from '../../assets/images/exit.svg'
import Button from '../../UI/Button/Button';
import company from '../../assets/images/company.svg'
import tasks from '../../assets/images/tasks.svg'
import team from '../../assets/images/team.svg'
import doc from '../../assets/images/doc.svg'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles['home']}> 
            <img src={logo} alt="" className={styles['home__logo']} />
            <div className={styles['home__content']}>
                <Plate className={styles['home__profile']}>
                    <div className={styles['home__profile-user']}>
                        <div className={styles['home__profile-user_wrapper']}>
                            <img src={avatar} alt="Аватар" className={styles["home__profile-user_avatar"]} />
                            <div className={styles["home__profile-user_info"]}>
                                <div className={styles["home__profile-user_info-name"]}>Иванов Иван</div>
                                <div className={styles["home__profile-user_info-subinfo"]}>Программист-стажер</div>
                                <div className={styles["home__profile-user_info-subinfo"]}>iivanov@ntec.by</div>
                            </div>
                        </div>
                        <img className={styles["home__profile-user_exit"]} src={exit} alt="Выход" title='Выход' />
                    </div>
                    <div className={styles["home__profile-info"]}>
                    <form className={styles["home__form"]}>
                        <div className={styles["home__form-group"]}>
                            <label 
                                className={styles["home__form-label"]} 
                                htmlFor="phoneNumber">
                                Номер телефона
                            </label>
                            <input
                                className={styles["home__form-input"]}
                                type="tel"
                                id="phoneNumber"
                            />
                        </div>

                        <div className={styles["home__form-group"]}>
                            <label 
                                className={styles["home__form-label"]}
                                htmlFor="birthDate">
                                Дата рождения
                            </label>
                            <input
                                className={styles["home__form-input"]}
                                type="date"
                                id="birthDate"
                            />
                        </div>

                        <div className={styles["home__form-group"]}>
                            <label 
                                className={styles["home__form-label"]} 
                                htmlFor="about">
                                О себе
                            </label>
                            <textarea
                                className={styles["home__form-textarea"]}
                                id="about"
                                rows="3"
                                placeholder="Расскажите немного о себе..."
                            />
                        </div>
                        <div className={styles["home__form-button_container"]}>
                            <Button className={styles['home__form-button']} type="submit">Сохранить</Button>
                        </div>
                    </form>
                    </div>
                </Plate>
                <div className={styles["home__right"]}>
                    <div className={styles["home__greetings"]}>Добро пожаловать, <div className={styles['home__greetings--primary']}>Иван!</div></div>
                    <nav className={styles["home__navigation"]}>
                       <Plate className={styles['home__navigation-button']}>
                            <img src={company} alt="" />
                            <div className={styles["home__navigation-button-title"]}>О компании</div>
                            <div className={styles["home__navigation-button-subtitle"]}>История, миссия и ценности компании</div>
                        </Plate> 
                       <Plate className={styles['home__navigation-button']}>
                            <img src={tasks} alt="" />
                            <div className={styles["home__navigation-button-title"]}>Мои задачи</div>
                            <div className={styles["home__navigation-button-subtitle"]}>Текущие задания и дедлайны</div>
                        </Plate> 
                       <Plate className={styles['home__navigation-button']}>
                            <img src={team} alt="" />
                            <div className={styles["home__navigation-button-title"]}>Моя команда</div>
                            <div className={styles["home__navigation-button-subtitle"]}>Об отделе, список коллег, контакты</div>
                        </Plate> 
                       <Plate className={styles['home__navigation-button']}>
                            <img src={doc} alt="" />
                            <div className={styles["home__navigation-button-title"]}>Документация</div>
                            <div className={styles["home__navigation-button-subtitle"]}>Важные файлы и инструкции, обучение</div>
                        </Plate> 
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Home;