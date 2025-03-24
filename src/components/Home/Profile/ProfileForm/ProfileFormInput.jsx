import styles from './ProfileForm.module.scss'

const ProfileFormInput = ({ id, type, label, value, editable, isArea = false }) => {

    if (editable) {
        return (
            <div className={styles["form-group"]}>
    
                <label 
                    className={styles["form-label"]} 
                    htmlFor={id}
                >
                    {label}
                </label>
                {isArea 
                ? 
                    <textarea
                        className={styles["form-textarea"]}
                        id={id}
                        rows="3"
                        placeholder="Расскажите немного о себе..."
                        value={value}
                    />
                : 
                    <input
                        className={styles["form-input"]}
                        type={type}
                        id={id}
                        value={value}
                    />
                }
                
            </div>
        )
    } else {
        return (
            <div className={styles["form-group"]}>
                <div className={styles["form-label"]}>{label}</div>
                {isArea 
                ?
                    <div className={styles["form-textarea"]} title='Нажмите на карандаш выше, чтобы редактировать'> 
                        <div className={styles["form-value"]}>
                            {value}
                        </div>
                    </div> 
                :
                    <div className={styles["form-input"]} title='Нажмите на карандаш выше, чтобы редактировать'>
                        <div className={styles["form-value"]}>
                            {value}
                        </div>
                    </div> 
                } 
            </div>
        )
    }
    
}

export default ProfileFormInput