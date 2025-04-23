import { Department } from "./Department";
import { UserFactory } from "./UserFactory";

export class Company {
  constructor() {
    this._departments = new Map();
    this._employees = new Map();
    this._currentUser = null;
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
    employee.setCompany(this);

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

  login(userId) {
    const user = this.getEmployee(userId);
    if (user) {
      this._currentUser = user;
      return user;
    }
    return null;
  }

  logout() {
    this._currentUser = null;
  }

  get currentUser() {
    return this._currentUser;
  }

  hasRole(role) {
    return this._currentUser?.role === role;
  }

  getEmployees(filters = {}) {
    let employees = Array.from(this._employees.values());

    if (filters.departmentId !== undefined) {
      employees = employees.filter((emp) => {
        const deptId = emp._departmentId;
        return (
          deptId !== undefined &&
          Number(deptId) === Number(filters.departmentId)
        );
      });
    }

    if (filters.role) {
      employees = employees.filter((emp) => emp.role === filters.role);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      employees = employees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchTerm) ||
          (emp.position && emp.position.toLowerCase().includes(searchTerm))
      );
    }

    return employees;
  }

  getEmployee(id) {
    return this._employees.get(id);
  }

  getDepartments(filters = {}) {
    let departments = Array.from(this._departments.values());

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      departments = departments.filter(
        (dept) =>
          dept.name.toLowerCase().includes(searchTerm) ||
          (dept.description &&
            dept.description.toLowerCase().includes(searchTerm))
      );
    }

    return departments;
  }

  getDepartment(id) {
    return this._departments.get(id);
  }
}
