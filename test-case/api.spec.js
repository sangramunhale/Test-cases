var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

var server = require("../app");

let chaiHttp = require("chai-http");
const { response } = require("express");
chai.use(chaiHttp);

describe("Task Api", function () {
  it("get list", function (done) {
    chai
      .request(server)
      .get("/user")
      .end((err, response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.have.all.keys("data", "statusText");
        done();
      });
  });
});
