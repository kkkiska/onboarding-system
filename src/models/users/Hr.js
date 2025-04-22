import { BaseUser } from "./BaseUser";

export class Hr extends BaseUser {
  constructor(data) {
    super(data);
    this._hiredEmployees = data.hiredEmployees || [];
  }

  hireEmployee(user) {
    this._hiredEmployees.push(user.id);
  }

  hireEmployees(employees) {
    return employees.map((emp) => this.hireEmployee(emp));
  }
}
