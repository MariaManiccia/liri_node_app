console.log('this is loaded');

// Spotify
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

// Axios
exports.axiosKey = {
    key: process.env.AXIOS_KEY,
};