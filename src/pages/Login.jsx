import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import Plate from '../UI/Plate';
import TextInput from '../UI/TextInput';
import logo from '../assets/images/logo.png'
import { useCallback } from 'react';

const Login = () => {
    console.log('login')
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const emailDomain = import.meta.env.VITE_EMAIL_DOMAIN;

    const validateEmail = (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
            return 'Некорректный email';
        }
    
        const domainRegex = new RegExp(`@${emailDomain}$`, 'i');
        if (!domainRegex.test(value)) {
            return `Email должен быть в домене @${emailDomain}`;
        }
    
        return true; 
    };

    const submitForm = (data) => {
        console.log(data);
        navigate('/home');
    };

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
                    <Button type="submit" className='login__form-button' disabled={errors.password || errors.email}>Войти</Button>
                </form>
                <p className="login__link">Забыли пароль?</p>
                <p className="login__link">Получить приглашение</p>
            </Plate>
        </div>
    );
};

export default Login;