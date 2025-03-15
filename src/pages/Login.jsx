import Button from '../UI/Button';
import Plate from '../UI/Plate';
import TextInput from '../UI/TextInput';
import logo from '../assets/images/logo.png'

const Login = () => {
    return (
        <div className="login">
            <Plate className="login__plate">
                <img className='login__logo' src={logo} alt="Логотип NTEC - onboarding system" />
                <div className="login__welcome">
                    <h1 className="login__welcome-title">Добро пожаловать!</h1>
                    <p className="login__welcome-subtitle">Вход в онбординговую систему</p>
                </div>
                <form className="login__form">
                    <TextInput
                        type="email"
                        placeholder="Email"
                        className="login__form-input"
                    />
                    <TextInput
                        type="password"
                        placeholder="Пароль"
                        className="login__form-input"
                    />
                    <Button type="submit">Войти</Button>
                </form>
                <p className="login__link">Забыли пароль?</p>
                <p className="login__link">Получить приглашение</p>
            </Plate>
        </div>
    );
};

export default Login;