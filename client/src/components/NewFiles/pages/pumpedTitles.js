const pumpedSeeds = {
    gameTitles: [
        "Escape From Tarkov",
    ],
    movieTitles: [
        "Despicable+Me"
    ],
    bookTitles: [
        "The Old Man and the Sea"
    ],
    musicTitles: [
        "1109731", "576431", "715929", "518458092", "4311597", "137234202", "92720102", "61424044", "4091624", "627421182"
    ],
    getRandomMovie: function () {
        return this.movieTitles[Math.floor(Math.random() * this.movieTitles.length) + 1]
    },
    getRandomBook: function () {
        return this.bookTitles[Math.floor(Math.random() * this.bookTitles.length) + 1]
    },
    getRandomGame: function () {
        return this.gameTitles[Math.floor(Math.random() * this.gameTitles.length) + 1]
    },
    getRandomSong: function () {
        return this.musicTitles[Math.floor(Math.random() * this.musicTitles.length) + 1]
    }
}

export default pumpedSeeds;