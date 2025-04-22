import { ROLE_NAMES } from "../../utils/constants";

export class BaseUser {
  constructor(data) {
    this.id = data.id;
    this.avatar = data.avatar || ""; //TODO: добавить ссылку для аватрки по умолчанию;
    this.name = data.name;
    this._departmentId = data.departmentId;
    this.position = data.position || "";
    this.role = data.role;
    this.regDate = data.regDate || new Date().toLocaleDateString();
    this.email = data.email || "";
  }

  get roleName() {
    return ROLE_NAMES[this.role] || "Неизвестная роль";
  }
}
