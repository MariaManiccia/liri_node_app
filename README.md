<h1>LIRI</h1>

<br>
<h2>The Language Interpretation and Recognition Interface</h2>

<br>
<p>LIRI is a command line node app that takes in parameters and gives back data.</p>

<!--Here I will describe the commands for the command line-->
<h3>::Commands::</h3>

<!--Concert-this-->
<br>
<h3>1. concert-this</h3>

<p>When you enter: "node liri concert-this ARTIST/BAND NAME" into the terminal, Liri will return the next three concerts information for the band or artist you entered. If that band is not on tour, the terminal will inform you.</p>

<h4>Example:</h4>
![Concert this command image](https://github.com/MariaManiccia/liri_node_app/blob/master/images/concert.png?raw=true)

<!--Spotify-this-->
<h3>2. spotify-this-song</h3>

<p>When you enter: "node liri spotify-this-song SONG TITLE" into the terminal, Liri returns the following information about the song in your terminal/bash window:</p>

<ul>
<li>Artist(s)</li> 
<li>The song's name</li>
<li>A preview link of the song from Spotify</li>
<li>The album that the song is from</li>
</ul>

<h4>Example:</h4>

<img src="images/spotify"
     alt="spotify-this"
     style="float: left; margin-right: 10px;" />

![Spotify this song command image](https://github.com/MariaManiccia/liri_node_app/blob/master/images/spotify.png?raw=true)

<!--Movie-this-->
<h3>3. movie-this</h3>

<p>When you enter: "node liri.js movie-this MOVIE NAME" into the terminal, Liri will give you the following information about the specified film:</p>

<ul>
<li>Title of the movie.</li>
<li>Year the movie came out.</li>
<li>IMDB Rating of the movie.</li>
<li>Rotten Tomatoes Rating of the movie.</li>
<li>Country where the movie was produced.</li>
<li>Language of the movie.</li>
<li>Plot of the movie.</li>
<li>Actors in the movie.</li>
</ul>

<h4>Example:</h4>
![Movie this command image](https://github.com/MariaManiccia/liri_node_app/blob/master/images/movie.png?raw=true)

<!--Do-what-it-says-->
<h3>4. do-what-it-says</h3>

<p>This command uses the termial and the fs module to pull the information from the random.txt file and populate information. In this example, the random.txt file contains the following:</p>

<h5>spotify-this-song,"I Want it That Way"</h5>

<h4>and Liri returns:</h4>
![Do what it says command image](https://github.com/MariaManiccia/liri_node_app/blob/master/images/doIt.png?raw=true)
