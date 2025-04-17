export const validateEmail = (value) => {
  const domain = import.meta.env.VITE_EMAIL_DOMAIN;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(value)) {
    return "Некорректный email";
  }

  const domainRegex = new RegExp(`@${domain}$`, "i");
  if (!domainRegex.test(value)) {
    return `Email должен быть в домене @${domain}`;
  }

  return true;
};
