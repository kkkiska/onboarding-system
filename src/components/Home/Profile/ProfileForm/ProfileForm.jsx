import Button from '../../../../UI/Button/Button'
import styles from './ProfileForm.module.scss'

const ProfileForm = () => {
    return (
        <form className={styles["form"]}>
            <div className={styles["form-group"]}>
                <label 
                    className={styles["form-label"]} 
                    htmlFor="phoneNumber">
                    Номер телефона
                </label>
                <input
                    className={styles["form-input"]}
                    type="tel"
                    id="phoneNumber"
                />
            </div>

            <div className={styles["form-group"]}>
                <label 
                    className={styles["form-label"]}
                    htmlFor="birthDate">
                    Дата рождения
                </label>
                <input
                    className={styles["form-input"]}
                    type="date"
                    id="birthDate"
                />
            </div>

            <div className={styles["form-group"]}>
                <label 
                    className={styles["form-label"]} 
                    htmlFor="about">
                    О себе
                </label>
                <textarea
                    className={styles["form-textarea"]}
                    id="about"
                    rows="3"
                    placeholder="Расскажите немного о себе..."
                />
            </div>
            <div className={styles["form-button_container"]}>
                <Button className={styles['form-button']} type="submit">Сохранить</Button>
            </div>
        </form>
    )
}

export default ProfileForm