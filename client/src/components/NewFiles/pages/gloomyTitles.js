const gloomyTitles = {
    gameTitles: [
        "23659", "29153", "12536", "320", "654", "5538", "13434", "3328", "3494", "20156"
    ],
    movieTitles: [
        "22+July", "Patriots+Day", "Stronger", "Romeo+Juliet", "One+Day", "Never+Let+Me+Go", "Eternal+Sunshine+of+the+Spotless+Mind", "Finding+Neverland", "My+Sisters+Keeper", "The+Notebook"
    ],
    bookTitles: [
        "My%20Sister's%20Keeper", "The%20Road", "Bridge%20to%20Terabithia", "Where%20the%20Red%20Fern%20Grows", "Of%20Mice%20and%20Men", "A%20Thousand%20Splendid%20Suns", "Flowers%20for%20Algernon", "We%20Were%20Liars", "The%20Time%20Traveler's%20Wife", "Atonement"
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
export default gloomyTitles;
