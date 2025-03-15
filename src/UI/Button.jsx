const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button type={type} className={`ui-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;