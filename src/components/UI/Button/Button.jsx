import styles from './Button.module.scss'

const Button = ({ className = '', type = 'button', 'aria-label': ariaLabel, ...rest }) => {
    return (
        <button 
            type={type}
            className={`${styles.button} ${className}`}
            aria-label={ariaLabel}
            {...rest}
        />
    );
};

export default Button;