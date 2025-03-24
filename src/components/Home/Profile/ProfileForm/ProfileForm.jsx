import Button from '../../../../UI/Button/Button'
import ProfileFormInput from './ProfileFormInput'
import styles from './ProfileForm.module.scss'  

const ProfileForm = ({editable}) => {
    return (
        <form className={styles["form"]}>
            
            <ProfileFormInput 
                id="phoneNumber" 
                type="tel" 
                label="Номер телефона" 
                value="+375291112233"
                editable={editable} 
            />
            <ProfileFormInput 
                id="birthDate" 
                type="date" 
                label="Дата рождения" 
                value="10.10.2020"
                editable={editable} 
            />
            <ProfileFormInput 
                id="birthDate" 
                type="date" 
                label="О себе" 
                value="Немного описания о себе"
                editable={editable} 
                isArea={true} 
            />

            {editable &&
                <div className={styles["form-button_container"]}>
                    <Button className={styles['form-button']} type="submit">Сохранить</Button>
                </div>
            }
        </form>
    )
}

export default ProfileForm