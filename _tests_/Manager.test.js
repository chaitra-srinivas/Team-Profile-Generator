const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a new Manager object", () => {
      const manager = new Manager(
        "1",
        "Captain Haddock",
        "haddock@sailing.com",
        "339900229"
      );

      expect(manager.id).toEqual("1");
      expect(manager.name).toEqual("Captain Haddock");
      expect(manager.email).toEqual("haddock@sailing.com");
      expect(manager.officeNumber).toEqual("339900229");
    });
  });

  it("should return manager's office number", () => {
    const officeNumber = "339900229";
    const manager = new Manager(
      "1",
      "Captain Haddock",
      "haddock@sailing.com",
      officeNumber
    );
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
  });

  it("should return manager's role", () => {
    const role = "Manager";
    const manager = new Manager(
      "1",
      "Captain Haddock",
      "haddock@sailing.com",
      "339900229"
    );
    expect(manager.getRole()).toEqual(role);
  });
});
