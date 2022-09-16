var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
var Student = require("../controllers/studentCtrl");
var studentObj = new Student();
const chaiaspromise = require("chai-as-promised");
chai.use(chaiaspromise);

describe("------- Promise ---------- ", function () {
  it("Normal Value Function ", function (done) {
    // expect(studentObj.dbData()).to.be.equal(10);

    studentObj.dbData().then(function (result) {
      expect(result).to.be.equal(10);
      done();
    });
  });

  it("Check Value Function ", function () {
    return expect(studentObj.dbData()).to.eventually.equal(10);
  });
});
