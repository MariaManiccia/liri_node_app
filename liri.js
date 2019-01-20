
require("dotenv").config();

// Main Variables
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");


var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

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

// Which actions to be called
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

  // If the user doesn't enter a movie
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
  // If they enter a movie title
  // Grab the information
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
  //ask the API
  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
    function (response) {
      // See if the information is there
      if (response === undefined) {
        console.log("Sorry! They aren't on tour right now. Try another artist.");
      }
      else {
        // if they are touring
        console.log("Here's their next couple shows!");
        console.log("--------------------");
        // To grab all the information
        var info = response.data;
        console.log("Next concert venue: " + info[1].venue.name);
        console.log("Venue location: " + info[1].venue.city + ", " + info[1].venue.country);
        console.log("Date: " + moment(info[1].datetime).format("MM-DD-YYYY"));
        console.log("--------------------");
        console.log("Next concert venue: " + info[2].venue.name);
        console.log("Venue location: " + info[2].venue.city + ", " + info[2].venue.country);
        console.log("Date: " + moment(info[2].datetime).format("MM-DD-YYYY"));
        console.log("--------------------");
        console.log("Next concert venue: " + info[3].venue.name);
        console.log("Venue location: " + info[3].venue.city + ", " + info[3].venue.country);
        console.log("Date: " + moment(info[3].datetime).format("MM-DD-YYYY"));
      }
    });
};



// function for the song
function song() {
  // if they don't type a song title
  if (value.length === 0) {
    value = "The Sign + Ace of Base"
  }
  //if they do type a song title
  //call for the infromation
  else {spotify.search({ type: 'track', query: value }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    //log certain information
    console.log("artist name: ", data.tracks.items[0].album.artists[0].name);
    console.log("album name: ", data.tracks.items[0].album.name);
    console.log("song name: ", data.tracks.items[0].name);
    console.log("preview: ", data.tracks.items[0].preview_url);

  });
  };
};

//function to grab information from a text file
function doIt() {
  //call for the information
  fs.readFile('random.txt', 'utf8', function (err, data) {
    if (err) throw err;
    //grab the information
    var random = data.split(',')
    var command = random[0];
    var search = random[1];

    // gather information and call the proper function
    action = command,
    value = search,
    song();
  });
};


