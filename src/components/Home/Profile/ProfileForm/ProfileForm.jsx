import Button from '../../../../UI/Button/Button'
import ProfileFormInput from './ProfileFormInput'
import styles from './ProfileForm.module.scss'  
import { useState } from 'react'

const ProfileForm = ({editable, initialData = {}, setEditable}) => {

    const [formData, setFormData] = useState({
        phoneNumber: initialData.phoneNumber || '+375291112233',
        birthDate: initialData.birthDate || '10.10.2020',
        about: initialData.about 
    });

    const dateForInput = formData.birthDate ? formData.birthDate.split('.').reverse().join('-') : '';

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditable(false);
        console.log('Отправленные данные:', formData);
    };

    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            
            <ProfileFormInput 
                id="phoneNumber" 
                type="tel" 
                label="Номер телефона" 
                value={formData.phoneNumber}
                editable={editable} 
                onChange={(value) => handleChange('phoneNumber', value)}
            />
            <ProfileFormInput 
                id="birthDate" 
                type="date" 
                label="Дата рождения" 
                value={editable ? dateForInput : formData.birthDate}
                editable={editable} 
                onChange={(value) => handleChange('birthDate', value.split('-').reverse().join('.'))}
            />
            <ProfileFormInput 
                id="about" 
                label="О себе" 
                value={formData.about}
                editable={editable} 
                isArea={true} 
                onChange={(value) => handleChange('about', value)}
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