const Intern = require("../lib/Intern.js");

test("checks to see if constructor creates a intern object", () =>
{
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toBeGreaterThan(0);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(Number));
});

test("checks to see if method returns school name", () =>
{
    const intern = new Intern();
    intern.school = "UTSA"

    expect(engineer.getSchool()).toEqual("UTSA");
});

test("checks to see if method returns role of the Engineer", () =>
{
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");
});