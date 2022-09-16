var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
var Student = require("../controllers/studentCtrl");
var studentObj = new Student();

describe("------- Mock ---------- ", function () {
  it("Count Function ", function () {
    var mock = sinon.mock(studentObj);

    var expt = mock.expects("getExternal");
    expt.exactly(1);
    expt.withArgs(40);
    studentObj.finalMarks(40);

    mock.verify();
  });
});
