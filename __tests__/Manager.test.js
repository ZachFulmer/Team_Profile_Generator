const Manager = require("../lib/Manager.js");

test("checks to see if constructor creates a manager object", () =>
{
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toBeGreaterThan(0);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("checks to see if method returns role of the Maanger", () =>
{
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");
});