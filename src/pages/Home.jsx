import Plate from '../UI/Plate';
import logo from '../assets/images/logo.png'
import avatar from '../assets/images/avatar.jpg'
import exit from '../assets/images/exit.svg'
import Button from '../UI/Button';
import company from '../assets/images/company.svg'
import tasks from '../assets/images/tasks.svg'
import team from '../assets/images/team.svg'
import doc from '../assets/images/doc.svg'

const Home = () => {
    return (
        <div className="home"> 
            <img src={logo} alt="" className="home__logo" />
            <div className="home__content">
                <Plate className="home__profile">
                    <div className="home__profile-user">
                        <div className='home__profile-user_wrapper'>
                            <img src={avatar} alt="Аватар" className="home__profile-user_avatar" />
                            <div className="home__profile-user_info">
                                <div className="home__profile-user_info-name">Иванов Иван</div>
                                <div className="home__profile-user_info-subinfo">Программист-стажер</div>
                                <div className="home__profile-user_info-subinfo">iivanov@ntec.by</div>
                            </div>
                        </div>
                        <img className="home__profile-user_exit" src={exit} alt="Выход" title='Выход' />
                    </div>
                    <div className="home__profile-info">
                    <form className="home__form">
                        <div className="home__form-group">
                            <label 
                                className="home__form-label" 
                                htmlFor="phoneNumber">
                                Номер телефона
                            </label>
                            <input
                                className="home__form-input"
                                type="tel"
                                id="phoneNumber"
                            />
                        </div>

                        <div className="home__form-group">
                            <label 
                                className="home__form-label" 
                                htmlFor="birthDate">
                                Дата рождения
                            </label>
                            <input
                                className="home__form-input"
                                type="date"
                                id="birthDate"
                            />
                        </div>

                        <div className="home__form-group">
                            <label 
                                className="home__form-label" 
                                htmlFor="about">
                                О себе
                            </label>
                            <textarea
                                className="home__form-textarea"
                                id="about"
                                rows="3"
                                placeholder="Расскажите немного о себе..."
                            />
                        </div>
                        <div className="home__form-button_container">
                            <Button className='home__form-button' type="submit">Сохранить</Button>
                        </div>
                    </form>
                    </div>
                </Plate>
                <div className="home__right">
                    <div className="home__greetings">Добро пожаловать, <div className='home__greetings--primary'>Иван!</div></div>
                    <nav className="home__navigation">
                       <Plate className='home__navigation-button'>
                            <img src={company} alt="" />
                            <div className="home__navigation-button-title">О компании</div>
                            <div className="home__navigation-button-subtitle">История, миссия и ценности компании</div>
                        </Plate> 
                       <Plate className='home__navigation-button'>
                            <img src={tasks} alt="" />
                            <div className="home__navigation-button-title">Мои задачи</div>
                            <div className="home__navigation-button-subtitle">Текущие задания и дедлайны</div>
                        </Plate> 
                       <Plate className='home__navigation-button'>
                            <img src={team} alt="" />
                            <div className="home__navigation-button-title">Моя команда</div>
                            <div className="home__navigation-button-subtitle">Об отделе, список коллег, контакты</div>
                        </Plate> 
                       <Plate className='home__navigation-button'>
                            <img src={doc} alt="" />
                            <div className="home__navigation-button-title">Документация</div>
                            <div className="home__navigation-button-subtitle">Важные файлы и инструкции, обучение</div>
                        </Plate> 
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Home;