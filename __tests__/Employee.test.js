const Employee = require("../lib/Employee.js");

test("creates an employee object", () =>
{
    const employee = new Employee("Carl", 1, "test@test.com");

    expect(employee.name).toEqual("Carl");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("test@test.com");
});

test("checks to see if method returns name", () =>
{
    const employee = new Employee("Carl", 1, "test@test.com");
    
    expect(employee.getName()).toEqual("Carl");
});

test("checks to see if method returns id", () =>
{
    const employee = new Employee("Carl", 1, "test@test.com");


    expect(employee.getId()).toEqual(1);
});

test("checks to see if method returns email", () =>
{
    const employee = new Employee("Carl", 1, "test@test.com");

    expect(employee.getEmail()).toEqual("test@test.com");
});

test("checks to see if method returns role of the employee", () =>
{
    const employee = new Employee("Carl", 1, "test@test.com");

    expect(employee.getRole()).toEqual("Employee");
});