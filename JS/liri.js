// Configs
require("dotenv").config();

// Main Variables
//var keys = require("./keys.js");

//var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");

//var spotify = new Spotify(keys.spotify);

var nodeArgs = process.argv;
var action = process.argv[2];
var value = "";

// Allowing multiples words 
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    value = value + "+" + nodeArgs[i];
  }
  else {
    value += nodeArgs[i];
  }
}

// which actions to be called
switch (action) {

  case "movie-this":
    movie();
    break;

  case "concert-this":
    concert();
    break;

  case "spotify-this-song":
    song();
    break;

  case "do-what-it-says":
    doIt();
    break;
}


// Functions to be called
function movie() {

  if (value.length === 0) {
    axios.get("http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&tomatoes=true&apikey=trilogy").then(
      function (response) {
        console.log("Mr.Nobody is a great movie! You should check it out on Netflix!");
        console.log("The movie's title: " + response.data.Title);
        console.log("Year released: " + response.data.Year);
        console.log("The movie's rating is: " + response.data.imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
        console.log("Country produced: " + response.data.Country);
        console.log("The movie's language is: " + response.data.Language);
        console.log("The movie's plot is: " + response.data.Plot);
        console.log("The movie's actors are: " + response.data.Actors);
      }

    )
  }
  else {
    axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
      function (response) {
        console.log("The movie's title: " + response.data.Title);
        console.log("Year released: " + response.data.Year);
        console.log("The movie's rating is: " + response.data.imdbRating);
        console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
        console.log("Country produced: " + response.data.Country);
        console.log("The movie's language is: " + response.data.Language);
        console.log("The movie's plot is: " + response.data.Plot);
        console.log("The movie's actors are: " + response.data.Actors);
      }
    );
  };
}


function concert() {

  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
    function (response) {

      for (var i = 0; i < response.data.length; i++) {
        console.log("Next concert venue:" + response.data[i].venue.name);
        console.log("Venue location:" + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log("Date:" + moment(response.data[i].datetime).format("MM-DD-YYYY"));
      }
    }
  )
};




function song() {

  spotify.get().then(
    function (response) {
      console.log(response);
    }
  );
}

