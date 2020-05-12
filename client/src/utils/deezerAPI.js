var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/genre/rock");

req.headers({
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	"x-rapidapi-key": "3fa4f5fc7amsha949b3cfed30da8p1e1f0cjsn53c96fd097d2"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});