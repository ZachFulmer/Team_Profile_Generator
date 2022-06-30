const Employee = require("../lib/Employee.js");

test("creates an employee object", () =>
{
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toEqual(expect.any(String));
});

test("checks to see if method returns name", () =>
{
    const employee = new Employee();
    employee.name = "Julia";
    
    expect(employee.getName()).toEqual("Julia");
});

test("checks to see if method returns id", () =>
{
    const employee = new Employee();
    employee.id = 5;

    expect(employee.getId()).toEqual(5);
});

test("checks to see if method returns email", () =>
{
    const employee = new Employee();
    employee.email = "Test@example.com";

    expect(employee.getEmail()).toEqual("Test@example.com");
});

test("checks to see if method returns role of the employee", () =>
{
    const employee = new Employee();

    expect(employee.getRole()).toEqual("employee");
});