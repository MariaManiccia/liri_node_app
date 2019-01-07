// Configs
require("dotenv").config();

// Main Variables
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var axios = require("axios");

var spotify = new Spotify(keys.spotify);
var axiosKey = new Axios(keys.axiosKey.key);
var action = process.argv[2];

var nodeArgs = process.argv;
var value = "";

// Allowing multiples words 
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    value = value + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];

  }
}

// which actions to be called
switch (action) {
  case "concert-this":
    concert();
    break;

  case "spotify-this-song":
    song();
    break;

  case "movie-this":
    movie();
    break;

  case "do-what-it-says":
    doIt();
    break;
}


// Functions to be called
function movie() {

  axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&tomatoes=true&apikey=" + axiosKey + "").then(
    function (response) {
      console.log("The movie's title: " + response.data.Title);
      console.log("Year released: " + response.data.Year);
      console.log("The movie's rating is: " + response.data.imdbRating);
      console.log("The movie's Rotten Tomatoes rating is: " + response.data.tomatoRating);
      console.log("Country produced: " + response.data.Country);
      console.log("The movie's language is: " + response.data.Language);
      console.log("The movie's plot is: " + response.data.Plot);
      console.log("The movie's actors are: " + response.data.Actors);
    }
  );
}


function song() {

  spotify.get().then(
    function (response) {
      console.log(response);
    }
  );
}

