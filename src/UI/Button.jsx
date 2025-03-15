const Button = ({ children, onClick, type = 'button', className = '', disabled }) => {
    return (
        <button type={type} className={`ui-button ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;