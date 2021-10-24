const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create a new employee object and return Employee details", () => {
      const employee = new Employee("1", "Mark", "mark@gmail.com");
      expect(employee.id).toEqual("1");
      expect(employee.name).toEqual("Mark");
      expect(employee.email).toEqual("mark@gmail.com");
    });
  });

  it("should return employee name", () => {
    const name = "Mark";
    const employee = new Employee("1", name, "mark@gmail.com");
    expect(employee.getName()).toEqual(name);
  });

  it("should return employee id", () => {
    const id = 1;
    const employee = new Employee(id, "Mark", "mark@gmail.com");
    expect(employee.getId()).toBe(id);
  });

  it("should return employee email", () => {
    const email = "mark@gmail.com";
    const employee = new Employee("1", "Mark", email);
    expect(employee.getEmail()).toBe(email);
  });

  it("should return employee role", () => {
    const role = "Employee";
    const employee = new Employee("1", "Mark", "mark@gmail.com");
    expect(employee.getRole()).toBe(role);
  });
});
