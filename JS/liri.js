require("dotenv").config();

//var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var action = process.argv[2];
var value = process.argv[3];

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

function movie() {

  axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log("The movie's title: " + response.data.Title);
      console.log("Year released: " + response.data.Year);
      console.log("The movie's rating is: " + response.data.imdbRating);
      //console.log("The movie's Rotten Tomatoes rating is: " + response.data.rottenTomatoesRating);
      console.log("Country produced: " + response.data.Country);
      console.log("The movie's language is: " + response.data.Language);
      console.log("The movie's plot is: " + response.data.Plot);
      console.log("The movie's actors are: " + response.data.Actors);
    }
  );
}

