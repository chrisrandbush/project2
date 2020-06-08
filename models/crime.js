//Dependency
var orm = require("../config/orm.js");

//Report module used by crimeController
var report = {
  //Returns all info from Chicago crimes
  all: function (cb) {
    orm.all("crimes_info", function (res) {
      cb(res);
    });
  },

  //Returns all from user reported crimes
  allreported: function(cb) {
    orm.all("crimes_reported", function (res) {
      cb(res);
    });
  },

  //Creates a new entry in our user reported crimes table
  create: function (hood, date, police, type, notes, cb) {
    orm.create("crimes_reported", [
      "neighborhood", "date", "police_called", "type", "notes"
    ], [
      hood, date, police, type, notes
    ], cb);
  },

  // ++++++ Future development for searching by neighborhood
  // search: function (hood, cb) {
  //   orm.search("crimes_info", hood, cb)
  // }

};

module.exports = report;
