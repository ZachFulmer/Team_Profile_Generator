const Engineer = require("../lib/Engineer.js");

test("checks to see if constructor creates a engineer object", () =>
{
    const engineer = new Engineer("Carl", 1, "test@test.com", "GitHub");

    expect(engineer.name).toEqual("Carl");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual("test@test.com");
    expect(engineer.github).toEqual("GitHub");
});

test("checks to see if method returns github username", () =>
{
    const engineer = new Engineer("Carl", 1, "test@test.com", "GitHub");

    expect(engineer.getGithub()).toEqual("GitHub");
});

test("checks to see if method returns role of the Engineer", () =>
{
    const engineer = new Engineer("Carl", 1, "test@test.com", "GitHub");

    expect(engineer.getRole()).toEqual("Engineer");
});