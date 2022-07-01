const Intern = require("../lib/Intern.js");

test("checks to see if constructor creates a intern object", () =>
{
    const intern = new Intern("Carl", 1, "test@test.com", "UTSA");

    expect(intern.name).toEqual("Carl");
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual("test@test.com");
    expect(intern.school).toEqual("UTSA");
});

test("checks to see if method returns school name", () =>
{
    const intern = new Intern("Carl", 1, "test@test.com","UTSA");

    expect(intern.getSchool()).toEqual("UTSA");
});

test("checks to see if method returns role of the Engineer", () =>
{
    const intern = new Intern("Carl", 1, "test@test.com");

    expect(intern.getRole()).toEqual("Intern");
});