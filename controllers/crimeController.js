//Dependencies and router setup
var express = require("express");

var router = express.Router();

//Requiring models
var report = require("../models/crime.js");

//Index get routes -- homepage
router.get("/", function (req, res) {
  res.redirect("/crimewatch");
});
router.get("/crimewatch", function (req, res) {
  res.render("index");
});

//Report get route -- displays page to report a crime
router.get("/report", function (req, res) {
  res.render("report");
});

//File get route -- displays page that renders user reported crimes
router.get("/file", function (req, res) {
  report.allreported(function (data) {
    var hbObj = {
      crime_data: data,
    };
    console.log(hbObj);
    res.render("file", hbObj);
  });
});

//Map get route -- displays page with crime heatmap
router.get("/map", function (req, res) {
  res.render("map");
});

//Post route to add a reported crime to crimes_reported
router.post("/crimewatch/create", function (req, res) {
  console.log(res);
  report.create(
    req.body.neighborhood,
    req.body.date,
    req.body.police_called,
    req.body.type,
    req.body.notes,
    function (result) {
      res.redirect("/file");
    }
  );
});

// ++++++ Future development for REPORT function
router.get("/crimewatch/report", function (req, res) {
  neighborhood.all(function (hoodId) {
    var hbsObject = {
      neighborhood: hoodId,
    };
    console.log(hbsObject);
    res.render("file", hbsObject);
  });
});

// ++++++ Future development for SEARCH function
router.get("/map/neighborhood", function (req, res) {
  console.log(req.query);
  report.search(req.query.neighborhood, function () {
    res.render("map");
  });
});

router.get("/api/crime_info/", function (req, res) {
  var hood = "neighborhood = " + req.params.neighborhood;

  console.log("neighborhood", hood);

  router.get(
    {
      neighborhood: req.body.neighborhood,
      hood_lat: req.body.hood_lat,
      hood_long: req.body.hood_long,
      crime_lat: req.body.crime_lat,
      crime_long: req.body.crime_long,
    },
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
