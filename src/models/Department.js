export class Department {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name || "Новый отдел";
    this.description = data.description || "";
    this._employees = new Map();
    this._headId = data.headId || null;
  }

  addEmployee(employee) {
    if (!employee?.id || this._employees.has(employee.id)) {
      return false;
    }

    this._employees.set(employee.id, employee);
    employee._departmentId = this.id;

    if (employee.role === "head") {
      this.setHead(employee);
    }

    return true;
  }

  addEmployees(employees) {
    if (!Array.isArray(employees)) return 0;
    return employees.filter((emp) => this.addEmployee(emp)).length;
  }

  removeEmployee(employeeId) {
    if (!this._employees.has(employeeId)) return false;

    const employee = this._employees.get(employeeId);
    employee._departmentId = null;
    this._employees.delete(employeeId);

    if (this._headId === employeeId) {
      this._headId = null;
    }

    return true;
  }

  getEmployees(filters = {}) {
    let result = [...this._employees.values()];

    if (filters.role) {
      result = result.filter((emp) => emp.role === filters.role);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchTerm) ||
          (emp.position && emp.position.toLowerCase().includes(searchTerm))
      );
    }

    return result;
  }

  getEmployee(employeeId) {
    return this._employees.get(employeeId) || null;
  }

  setHead(employee) {
    if (!employee || employee.role !== "head") return false;

    const currentHead = this.getHead();
    if (currentHead && currentHead.id !== employee.id) {
      currentHead.role = "mentor";
    }

    this._headId = employee.id;
    this.addEmployee(employee);
    return true;
  }

  getHead() {
    return this._headId ? this._employees.get(this._headId) : null;
  }

  getEmployeeCount() {
    return this._employees.size;
  }

  hasEmployee(employeeId) {
    return this._employees.has(employeeId);
  }
}
