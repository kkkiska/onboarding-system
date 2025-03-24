import Button from '../../../../UI/Button/Button'
import ProfileFormInput from './ProfileFormInput'
import styles from './ProfileForm.module.scss'  

const ProfileForm = () => {
    return (
        <form className={styles["form"]}>
            
            <ProfileFormInput id="phoneNumber" type="tel" />
            <ProfileFormInput id="birthDate" type="date" />

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