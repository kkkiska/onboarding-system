import { ROLE_NAMES } from "../../utils/constants";

export class BaseUser {
  constructor(data) {
    this.id = data.id;
    this.avatar = data.avatar || ""; //TODO: добавить ссылку для аватрки по умолчанию;
    this.name = data.name;
    this._departmentId = data.departmentId;
    this._departmentName = null;
    this.position = data.position || "";
    this.role = data.role;
    this.regDate = data.regDate || new Date().toLocaleDateString();
    this.email = data.email || "";
  }

  get departmentName() {
    if (this._departmentName === null && this._departmentId) {
      const department = this._company?.getDepartment(this._departmentId);
      this._departmentName = department?.name || "Неизвестный отдел";
    }
    return this._departmentName || "Не назначен";
  }

  get departmentId() {
    return this._departmentId || null;
  }

  setCompany(company) {
    this._company = company;
    this._departmentName = null;
  }

  get roleName() {
    return ROLE_NAMES[this.role] || "Неизвестная роль";
  }

  canRateTasks() {
    return ["mentor", "head"].includes(this.role);
  }
}
