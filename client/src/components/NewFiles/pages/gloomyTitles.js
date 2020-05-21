const gloomySeeds = {
    gameTitles: [
        "Gris", "Telltale's+The+Walking+Dead+Series", "Brothers:+A+Tale+Of+Two+Sons", "Undertale", "The+Last+Of+Us", "Life+is+Strange", "That+Dragon", "Cancer", "Gone+Home", "Thomas+was+alone"
    ],
    movieTitles: [
        "Despicable+Me"
    ],
    bookTitles: [
        "The Old Man and the Sea"
    ],
    musicTitles: [
        "552496572", "424564372", "3614665", "678184", "877873612", "62376277", "582143242", "773430", "3106505", "15078245"
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

export default gloomySeeds;