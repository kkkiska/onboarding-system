const Plate = ({ children, className = '' }) => {
    return (
        <div className={`ui-plate ${className}`}>
            {children}
        </div>
    );
};

export default Plate;