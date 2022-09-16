var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");

describe("Heading 1", function () {
  after(function () {
    console.log("+++++ First +++++");
  });

  before(function () {
    console.log("++++++ Last +++++++");
  });

  afterEach(function () {
    console.log("++++++ after Every test Case++++++++");
  });

  beforeEach(function () {
    console.log("++++++ Before Every test Case++++++++");
  });

  var data = "Code";

  it("Check String", function () {
    expect(data).to.be.a("string");
  });

  it("value", function () {
    expect(data).to.be.equal("Code");
  });
});

describe("Heading 2", function () {
  var data = "Code";

  it("Check String 2", function () {
    expect(data).to.be.a("string");
  });
});
