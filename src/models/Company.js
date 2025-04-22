import { Department } from "./Department";
import { UserFactory } from "./UserFactory";

export class Company {
  constructor() {
    this._departments = new Map();
    this._employees = new Map();
  }

  createDepartment(data) {
    const department = new Department(data);
    this._departments.set(department.id, department);
    return department;
  }

  createDepartments(departmentsData) {
    return departmentsData.map((data) => this.createDepartment(data));
  }

  hireEmployee(data) {
    const employee = UserFactory.create(data);
    this._employees.set(employee.id, employee);

    if (data.departmentId) {
      const department = this._departments.get(data.departmentId);
      if (department) {
        department.addEmployee(employee);
      }
    }

    return employee;
  }

  hireEmployees(employeesData) {
    return employeesData.map((data) => this.hireEmployee(data));
  }

  addEmployeeToDepartment(employeeId, departmentId) {
    const employee = this.getEmployee(employeeId);
    const department = this.getDepartment(departmentId);

    if (!employee || !department) {
      throw new Error("Сотрудник или отдел не найдены");
    }

    department.addEmployee(employee);
    return employee;
  }

  addEmployeesToDepartment(employeeIds, departmentId) {
    return employeeIds.map((id) =>
      this.addEmployeeToDepartment(id, departmentId)
    );
  }

  getEmployee(id) {
    return this._employees.get(id);
  }

  getDepartment(id) {
    return this._departments.get(id);
  }
}
