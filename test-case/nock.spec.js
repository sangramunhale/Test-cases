var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
var Student = require("../controllers/studentCtrl");
var stdClass = new Student();

const nock = require("nock");

describe("nock Testcase", function () {
  it("api test", function (done) {
    var obj = { status: "OK", statusCode: 200, data: [] };

    const apihit = nock("http://localhost/api")
      .get("/article-list")
      .reply(200, obj);

    stdClass
      .thirdPartyapi()
      .then(function (record) {
        console.log(record);
        expect(record).to.be.eql(obj);
        done();
      })
      .catch((error) => {
        done(new Error("error :- " + error));
      });
  });
});
