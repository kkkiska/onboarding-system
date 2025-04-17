import { useState } from "react";
import EditForm from "./EditForm";
import ViewForm from "./ViewForm";

const ProfileForm = ({ editable, initialData = {}, setEditable }) => {
  const [formData, setFormData] = useState({
    phoneNumber: initialData.phoneNumber || "+375291112233",
    birthDate: initialData.birthDate || "10.10.2020",
    about: initialData.about,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditable(false);
    console.log("Отправленные данные:", formData);
  };

  return editable ? (
    <EditForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  ) : (
    <ViewForm formData={formData} />
  );
};

export default ProfileForm;
