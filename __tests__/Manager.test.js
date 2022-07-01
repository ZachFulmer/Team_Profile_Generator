const Manager = require("../lib/Manager.js");

test("checks to see if constructor creates a manager object", () =>
{
    const manager = new Manager("Carl", 1, "test@test.com", 5);

    expect(manager.name).toEqual("Carl");
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual("test@test.com");
    expect(manager.officeNumber).toEqual(5);
});

test("checks to see if method returns role of the Maanger", () =>
{
    const manager = new Manager("Carl", 1, "test@test.com", 5);
    
    expect(manager.getRole()).toEqual("Manager");
});