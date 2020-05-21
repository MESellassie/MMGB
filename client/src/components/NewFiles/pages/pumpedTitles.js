const pumpedSeeds = {
    gameTitles: [
        "3498", "22511", "28", "58175", "3990", "58829", "58134", "282825", "259801", "3287"
    ],
    movieTitles: [
        "Con+Air", "Avengers+Infinity+War", "The+Matrix", "Back+To+The+Future", "Star+Wars+The+Force+Awakens", "Bad+Boys+For+Life", "The+Dark+Knight", "6+Underground", "National+Treasure", "John+Wick", "Gone+In+60+Seconds"
    ],
    bookTitles: [
        "Lord%20of%20the%20Rings", "To%20Kill%20a%20Mockingbird", "The%20Picture%20of%20Dorian%20Gray", "Catch-22", "Nineteen%20Eighty-Four", "Pride%20and%20Prejudice", "Harry%20Potter%20and%20the%20Sorcerer's%20Stone", "Hamlet", "Angels%20and%20Demons", "The%20Great%20Gatsby"
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