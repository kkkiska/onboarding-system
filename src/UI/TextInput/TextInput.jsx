import styles from './TextInput.module.scss'

const TextInput = ({ type = 'text', placeholder = '', value, onChange, className = '', ...rest }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${styles['textinput']} ${className}`}
            {...rest}
        />
    )
}

export default TextInput