const router = require("express").Router();
const util = require("util");
var db = require("../../models");

// Event List Get Route
router.route("/api/eventlist").get(function (req, res) {
  db.eventlist.findAll({}).then(function (dbEventlist) {
    res.json(dbEventlist);
  });
});

// Event List Post Route
router.route("/api/eventlist").post(function (req, res) {
  db.eventlist.create().then(function (dbEventlist) {
    res.json(dbEventlist);
  });
});

// Family Code Get Route
router.route("/api/familycode").get(function (req, res) {
  db.familycode.findAll({}).then(function (dbFamilycode) {
    res.json(dbFamilycode);
  });
});

// Family Code Post Route
router.route("/api/familycode").post(function (req, res) {
  db.familycode.create().then(function (dbFamilycode) {
    res.json(dbFamilycode);
  });
});

// User Table Get Route
router.route("/api/usertable").get(function (req, res) {
  db.usertable.findAll({}).then(function (dbUsertable) {
    res.json(dbUsertable);
  });
});

// User Table Post Route
router.route("/api/usertable").post(function (req, res) {
  db.usertable.create().then(function (dbUsertable) {
    res.json(dbUsertable);
  });
});
