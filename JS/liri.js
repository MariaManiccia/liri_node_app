require("dotenv").config();

//var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);
var fs = require("axios");
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
    
