const TextInput = ({ type = 'text', placeholder = '', value, onChange, className = '', ...rest }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`ui-textinput ${className}`}
            {...rest}
        />
    )
}

export default TextInput