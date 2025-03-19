import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Plate from '../UI/Plate';
import TextInput from '../UI/TextInput';
import logo from '../assets/images/logo.png'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import LoginCache from '../utils/LoginCache';
import { validateEmail } from '../utils/validators';
import LoginLimitTimer from '../components/LoginLimitTimer';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ message: '', code: '' });
    const [showTimer, setShowTimer] = useState(false);
    const { login } = useContext(AuthContext);

    const submitForm = async (data) => {
        setLoading(true);
        setError({ message: '', code: '' }); 
        
        if (LoginCache.isCached(data.email, data.password)) {
            setError({ message: 'Неверные данные уже были отправлены ранее', code: 'Cached' });
            setLoading(false);
            return;
        }

        try {
            const response = await api.post('/login', data);

            if (response.data.token) {
                login(response.data.token);
                navigate('/home');
            }
        } catch (err) {
            LoginCache.addToCache(data.email, data.password);
            const errorMessage = err.response?.data?.error || 'Произошла ошибка при входе';
            const errorCode = err.response?.data?.message || 'Unknown';

            if (errorCode.includes('Too Many Attempts')) {
                setShowTimer(true);
            }

            setError({ message: errorMessage, code: errorCode });
        } finally {
            setLoading(false);
        }
    };

    const handleTimerEnd = () => {
        setShowTimer(false); 
        setError({ message: '', code: '' }); 
    };

    const isButtonDisabled = errors.password || errors.email || loading || error.code.includes('Too Many Attempts');

    return (
        <div className="login">
            <Plate className="login__plate">
                <img className='login__logo' src={logo} alt="Логотип NTEC - onboarding system" />
                <div className="login__welcome">
                    <h1 className="login__welcome-title">Добро пожаловать!</h1>
                    <p className="login__welcome-subtitle">Вход в онбординговую систему</p>
                </div>
                <form className="login__form" onSubmit={handleSubmit(submitForm)} noValidate>
                    <TextInput
                        type="email"
                        placeholder="Email"
                        className={`login__form-input ${errors.email ? 'login__form-input--error' : ''}`}
                        {...register('email', {
                            required: 'Email обязателен',
                            validate: validateEmail,
                            maxLength: {
                                value: 50,
                                message: 'Email должен быть не длиннее 50 символов',
                            },
                            minLength: {
                                value: 5,
                                message: 'Email должен быть не короче 5 символов',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="login__error">{errors.email.message}</p>
                    )}
                    <TextInput
                        type="password"
                        placeholder="Пароль"
                        className={`login__form-input ${errors.password ? 'login__form-input--error' : ''}`}
                        {...register('password', {
                            required: 'Пароль обязателен',
                            minLength: {
                                value: 6,
                                message: 'Пароль должен быть не менее 6 символов',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Пароль должен быть не длиннее 20 символов',
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="login__error">{errors.password.message}</p>
                    )}
                    <Button type="submit" className='login__form-button' disabled={isButtonDisabled}>{loading ? 'Загрузка...' : 'Войти'}</Button>
                    {showTimer && <LoginLimitTimer initialTime={60} onTimerEnd={handleTimerEnd} />}
                    {error.message && !showTimer && (
                        <p className="login__error">{error.message}</p>
                    )}
                </form>
                <p className="login__link">Забыли пароль?</p>
                <p className="login__link">Получить приглашение</p>
            </Plate>
        </div>
    );
};

export default Login;