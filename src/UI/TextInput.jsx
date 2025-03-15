const TextInput = ({ type = 'text', placeholder = '', value, onChange, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`ui-textinput ${className}`}
        />
    )
}

export default TextInput