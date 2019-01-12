// Configs
require("dotenv").config();

// Main Variables
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");

//var spotify = new Spotify(keys.spotify);

var nodeArgs = process.argv;
var action = process.argv[2];
var value = "";

function Spotify(){
  
}

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
// Movie function using OMDB API
function movie() {

  // if the user doesn's enter a movie
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
  // otherwise
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

// function to get concerts of an artist
function concert() {

  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
    function (response) {
      // make sure you can get information
      if (this.response === undefined) {
        console.log("Sorry! They aren't on tour right now. Try another artist.");
      }
      else {
        console.log("Here's their next couple shows!");
        // to grab all the information
          console.log("Next concert venue:" + response.data[1].venue.name);
          console.log("Venue location:" + response.data[1].venue.city + ", " + response.data[1].venue.country);
          console.log("Date:" + moment(response.data[1].datetime).format("MM-DD-YYYY"));
          console.log("--------------------");
          console.log("Next concert venue:" + response.data[2].venue.name);
          console.log("Venue location:" + response.data[2].venue.city + ", " + response.data[2].venue.country);
          console.log("Date:" + moment(response.data[2].datetime).format("MM-DD-YYYY"));
          console.log("--------------------");
          console.log("Next concert venue:" + response.data[3].venue.name);
          console.log("Venue location:" + response.data[3].venue.city + ", " + response.data[3].venue.country);
          console.log("Date:" + moment(response.data[3].datetime).format("MM-DD-YYYY"));
        }
      }
  )
};




/*function song() {
  console.log(keys.spotify)
  spotify.search({ type: "track", query: value, limit: 1 }, function (err, data) {
    if (err) {
      return console.log("Error occured: " + err);
    }

    var artist = data.tracks.items[0].artists;
    var album = data.tracks.items[0].album.name;
    var link = data.tracks.items[0].preview_url;
    console.log(artist, album, link);
  })
}*/

function doIt() {

}

