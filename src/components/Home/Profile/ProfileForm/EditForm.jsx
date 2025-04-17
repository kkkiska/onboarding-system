import styles from "./ProfileForm.module.scss";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import BlueButton from "../../../UI/Button/BlueButton";

const EditForm = ({ formData, handleChange, handleSubmit }) => {
  const dateForInput = formData.birthDate?.split(".").reverse().join("-");

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <FormInput
        id="phoneNumber"
        type="tel"
        label="Номер телефона"
        value={formData.phoneNumber}
        onChange={(value) => handleChange("phoneNumber", value)}
      />
      <FormInput
        id="birthDate"
        type="date"
        label="Дата рождения"
        value={dateForInput}
        onChange={(value) =>
          handleChange("birthDate", value.split("-").reverse().join("."))
        }
      />
      <FormTextarea
        id="about"
        label="О себе"
        value={formData.about}
        onChange={(value) => handleChange("about", value)}
      />

      <div className={styles["form-button_container"]}>
        <BlueButton className={styles["form-button"]} type="submit">
          Сохранить
        </BlueButton>
      </div>
    </form>
  );
};

export default EditForm;
