const { rejects } = require("assert");
const { resolve } = require("path");
const { default: axios } = require("axios");
const { response } = require("express");

class Student {
  constructor() {}
  home(type) {
    let data = this.getInfo(type, 1);
    return data + 5;
  }

  userId() {
    return 12;
  }

  getInfo(type, status) {
    return 10;
  }

  finalMarks(total) {
    let external = this.getExternal(total);
    let internal = this.getInternal(total);
    let finalsum = external + internal + 10;

    return finalsum;
  }

  getExternal(total) {
    return total + 1;
  }

  getInternal(total) {
    return total - 1;
  }

  dbData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(10), 1500);
    });
  }

  thirdPartyapi() {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost/api/article-list")
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = Student;
