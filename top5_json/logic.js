// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

var initLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);
// #################################################################

// pulling Country data for 2015
var countries2015 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2015.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2015);
console.log(countries2015[0]["happiness_rank"]);

// ##############################################################

// pulling Country data for 2016
var countries2016 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2016.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2016);
console.log(countries2016[0]["happiness_rank"]);

// ##################################################################


// pulling Country data for 2017
var countries2017 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2017.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2017);
console.log(countries2017[0]["happiness_rank"]);

// ###################################################################


// pulling Country data for 2018
var countries2018 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2018.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2018);
console.log(countries2018[0]["happiness_rank"]);

// #####################################################################


// pulling Country data for 2019
var countries2019 = (function () {
  var testData = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data_2019.json',
      'dataType': "json",
      'success': function (data) {
          testData = data;
      }
  });
  return testData;
  })(); 

// Test index into happiness rank 
// console.log(countries2019);
console.log(countries2019[0]["happiness_rank"]);

// #################################################################################

// sorting 2015 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2015 = Object.values(countries2015);

// sorting by happiness_rank
sorted2015.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2015 = sorted2015.reverse().slice(0,5);
var top5_2015 = sorted2015.slice(-5).reverse();

// checking values
console.log(top5_2015);
console.log(bottom5_2015);

// #####################################################################################


// sorting 2016 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2016 = Object.values(countries2016);

// sorting by happiness_rank
sorted2016.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2016 = sorted2016.reverse().slice(0,5);
var top5_2016 = sorted2016.slice(-5).reverse();

// checking values
console.log(top5_2016);
console.log(bottom5_2016);

// #####################################################################################


// sorting 2017 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2017 = Object.values(countries2017);

// sorting by happiness_rank
sorted2017.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2017 = sorted2017.reverse().slice(0,5);
var top5_2017 = sorted2017.slice(-5).reverse();

// checking values
console.log(top5_2017);
console.log(bottom5_2017);

// #####################################################################################


// sorting 2018 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2018 = Object.values(countries2018);

// sorting by happiness_rank
sorted2018.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2018 = sorted2018.reverse().slice(0,5);
var top5_2018 = sorted2018.slice(-5).reverse();

// checking values
console.log(top5_2018);
console.log(bottom5_2018);

// #####################################################################################


// sorting 2019 data and pulling top 5 and bottom 5

// reformatting object to be list of arrarys
var sorted2019 = Object.values(countries2019);

// sorting by happiness_rank
sorted2019.sort((a, b) => (a.happiness_rank > b.happiness_rank) ? 1 : -1);

// getting top 5 and bottom 5
var bottom5_2019 = sorted2019.reverse().slice(0,5);
var top5_2019 = sorted2019.slice(-5).reverse();

// checking values
console.log(top5_2019);
console.log(bottom5_2019);

// #####################################################################################

// adding markers for top 5 2015


  var switz15 = L.marker([top5_2015[0]["lat"], 
  top5_2015[0]["lng"]]).bindPopup("<h1>" + top5_2015[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[0]["happiness_rank"] + "</h3>")

  var ice15 = L.marker([top5_2015[1]["lat"], 
  top5_2015[1]["lng"]]).bindPopup("<h1>" + top5_2015[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[1]["happiness_rank"] + "</h3>")

  var den15 = L.marker([top5_2015[2]["lat"], 
  top5_2015[2]["lng"]]).bindPopup("<h1>" + top5_2015[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[2]["happiness_rank"] + "</h3>")

  var nor15 = L.marker([top5_2015[3]["lat"], 
  top5_2015[3]["lng"]]).bindPopup("<h1>" + top5_2015[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[3]["happiness_rank"] + "</h3>")

  var can15 = L.marker([top5_2015[4]["lat"], 
  top5_2015[4]["lng"]]).bindPopup("<h1>" + top5_2015[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[4]["happiness_rank"] + "</h3>")

  // var c15 = L.layerGroup([switz15, ice15, den15, nor15, can15]);


// #####################################################################################

// adding markers for bottom 5 2015

  var togo15 = L.marker([bottom5_2015[0]["lat"], 
  bottom5_2015[0]["lng"]]).bindPopup("<h1>" + bottom5_2015[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[0]["happiness_rank"] + "</h3>")

  var Buru15 = L.marker([bottom5_2015[1]["lat"], 
  bottom5_2015[1]["lng"]]).bindPopup("<h1>" + bottom5_2015[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[1]["happiness_rank"] + "</h3>")

  var syr15 = L.marker([bottom5_2015[2]["lat"], 
  bottom5_2015[2]["lng"]]).bindPopup("<h1>" + bottom5_2015[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[2]["happiness_rank"] + "</h3>")

  var ben15 = L.marker([bottom5_2015[3]["lat"], 
  bottom5_2015[3]["lng"]]).bindPopup("<h1>" + bottom5_2015[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[3]["happiness_rank"] + "</h3>")

  var rwa15 = L.marker([bottom5_2015[4]["lat"], 
  bottom5_2015[4]["lng"]]).bindPopup("<h1>" + bottom5_2015[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2015[4]["happiness_rank"] + "</h3>")

  var c15 = L.layerGroup([switz15, ice15, den15, nor15, can15, togo15, Buru15, syr15, rwa15]);
  

// #####################################################################################

  // adding markers for top 5 2016


  var den16 = L.marker([top5_2016[0]["lat"], 
  top5_2016[0]["lng"]]).bindPopup("<h1>" + top5_2016[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[0]["happiness_rank"] + "</h3>")

  var switz16 = L.marker([top5_2016[1]["lat"], 
  top5_2016[1]["lng"]]).bindPopup("<h1>" + top5_2016[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[1]["happiness_rank"] + "</h3>")

  var ice16 = L.marker([top5_2016[2]["lat"], 
  top5_2016[2]["lng"]]).bindPopup("<h1>" + top5_2016[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[2]["happiness_rank"] + "</h3>")

  var nor16 = L.marker([top5_2016[3]["lat"], 
  top5_2016[3]["lng"]]).bindPopup("<h1>" + top5_2016[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[3]["happiness_rank"] + "</h3>")

  var fin16 = L.marker([top5_2016[4]["lat"], 
  top5_2016[4]["lng"]]).bindPopup("<h1>" + top5_2016[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2016[4]["happiness_rank"] + "</h3>")

  // var c15 = L.layerGroup([switz15, ice15, den15, nor15, can15]);


// #####################################################################################

// adding markers for bottom 5 2016

  var togo16 = L.marker([bottom5_2016[0]["lat"], 
  bottom5_2016[0]["lng"]]).bindPopup("<h1>" + bottom5_2016[0]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[0]["happiness_rank"] + "</h3>")

  var Buru16 = L.marker([bottom5_2015[1]["lat"], 
  bottom5_2016[1]["lng"]]).bindPopup("<h1>" + bottom5_2016[1]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[1]["happiness_rank"] + "</h3>")

  var syr16 = L.marker([bottom5_2016[2]["lat"], 
  bottom5_2016[2]["lng"]]).bindPopup("<h1>" + bottom5_2016[2]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[2]["happiness_rank"] + "</h3>")

  var benin16 = L.marker([bottom5_2016[3]["lat"], 
  bottom5_2016[3]["lng"]]).bindPopup("<h1>" + bottom5_2016[3]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[3]["happiness_rank"] + "</h3>")

  var afg16 = L.marker([bottom5_2016[4]["lat"], 
  bottom5_2016[4]["lng"]]).bindPopup("<h1>" + bottom5_2016[4]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + bottom5_2016[4]["happiness_rank"] + "</h3>")

  var c16 = L.layerGroup([switz16, ice16, den16, nor16, fin16, benin16, togo16, Buru16, syr16, afg16]);

  



//  var cd = makerlocation(top5_2015);

var baseMaps = {
  "initLayer": initLayer
}

var overlayMaps = {
  "c15": c15,
  "c16": c16
}

L.control.layers(baseMaps, overlayMaps).addTo(myMap);



// Loop through the cities array and create one marker for each city object
// for (var i = 0; i < top5_2015.length; i++) {

//   var m = L.marker([top5_2015[i]["lat"], 
//   top5_2015[i]["lng"]]).bindPopup("<h1>" + top5_2015[i]["country"] + "</h1> <hr> <h3>Happiness_Rank: " + top5_2015[i]["happiness_rank"] + "</h3>")

//   // Conditionals for happiness points
//   var color = "";
//   if (top5_2015[i]["happiness_rank"] < 10) {
//     color = "green";
//   }

//   else {
//     color = "Yellow";
//   }

// //   // Add circles to map
//   L.circle(loc[i], {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: color,
//     // Adjust radius
//     radius: top5_2015[i].happiness_rank * 150
//   }).bindPopup("<h1>" + top5_2015[i]["country"] + "</h1> <hr> <h3>Points: " + top5_2015[i]["happiness_rank"] + "</h3>").addTo(myMap);
// }


