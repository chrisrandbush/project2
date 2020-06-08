//ORM takes inputs and conditions and turns into mySQL commands

//Connection dependency
var connection = require("./connection.js");

//Prints ?'s based on input
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//Turns an object into sql syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  //Method to search for all information in a table
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },

  //Method to add a reported crime to crimes_reported
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // ++++++ Future development for SEARCH function
  // search: function (table, latlong, cb) {
  //   latlong = JSON.parse(latlong);
  //   var queryString = `SELECT 'crime_lat', 'crime_long' FROM ${table} WHERE hood_lat = '${latlong.lat}' AND hood_long = '${latlong.long}'`;

  //   connection.query(queryString, function (err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
};

module.exports = orm;
