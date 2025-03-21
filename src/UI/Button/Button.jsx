import styles from './Button.module.scss'

const Button = ({ children, onClick, type = 'button', className = '', disabled }) => {
    return (
        <button type={type} className={`${styles['button']} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;