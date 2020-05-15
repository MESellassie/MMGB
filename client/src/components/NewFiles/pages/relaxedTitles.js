const relaxedSeeds = {
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
        "13204278", "116348656", "63266242", "142844852", "4188290", "79875064", "880181", "68095456", "3098840", "111780390"
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

export default relaxedSeeds;