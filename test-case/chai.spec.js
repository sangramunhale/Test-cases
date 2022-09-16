var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

//##########   ASSERT #########

describe("-------Aspect Check--------", function () {
  let userName = "code imporve";
  let mylist = {
    item: [
      {
        id: 1,
        name: "demo",
      },
    ],
    title: "user list",
  };

  it("Check String", function () {
    assert.typeOf(userName, "string");
  });

  it("Equal match", function () {
    assert.equal(userName, "code imporve");
  });

  it("length match", function () {
    assert.lengthOf(mylist.item, 1);
  });
});

//######### EXPECT ########

describe("------Check Expect-------", function () {
  let userName = "code imporve";
  let mylist = {
    item: [
      {
        id: 1,
        name: "demo",
      },
    ],
    title: "user list",
    address: {
      country: "India",
      phoneno: ["9527080980", "8483819682"],
    },
  };

  it("string Match", function () {
    expect(userName).to.be.a("string");
  });

  it("Equal Match", function () {
    expect(userName).to.equal("code imporve");
  });

  it("Length Match", function () {
    expect(userName).to.lengthOf(12);
  });

  it("Object Length", function () {
    expect(mylist).to.have.property("item").with.lengthOf(1);
  });

  it("api Object match", function () {
    expect(mylist).to.have.all.keys("item", "title", "address");
  });

  it("Phone No.", function () {
    expect(mylist).to.have.nested.property("address.phoneno[0]");
  });

  it("Country Check", function () {
    expect(mylist).to.have.nested.include({ "address.country": "India" });
  });
});
