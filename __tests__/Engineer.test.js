const Engineer = require("../lib/Engineer.js");

test("checks to see if constructor creates a engineer object", () =>
{
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toBeGreaterThan(0);
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(Number));
});

test("checks to see if method returns github username", () =>
{
    const engineer = new Engineer();
    engineer.github = "ZachFulmer"

    expect(engineer.getGithub()).toEqual("ZachFulmer");
});

test("checks to see if method returns role of the Engineer", () =>
{
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
});