import styles from './ProfileForm.module.scss'

const ProfileFormInput = ({ id, type }) => {
    return (
        <div className={styles["form-group"]}>

            <label 
                className={styles["form-label"]} 
                htmlFor={id}
            >
                Номер телефона
            </label>

            <input
                className={styles["form-input"]}
                type={type}
                id={id}
            />
            
        </div>
    )
}

export default ProfileFormInput