const relaxedTitles = {
    gameTitles: [
        "274757", "50796", "421698", "58818", "339958", "3254", "517", "455", "281837", "7381"
    ],
    movieTitles: [
        "Confessions+of+a+Shopaholic", "The+Intern", "How+to+Lose+a+Guy+in+10+Days", "National+Treasure", "View+from+the+Top", "Deck+the+Halls", "The+Pacifier", "From+Paris+with+Love", "The+Italian+Job", "Oceans+Thirteen"
    ],
    bookTitles: [
        "The%20Little%20Prince", "Attachments", "Wonder", "The%20Art%20of%20Racing%20in%20the%20Rain", "Anne%20of%20Green%20Gables", "Persuasion", "Orlando", "Notes%20From%20a%20Small%20Island", "Lillian%20Boxfish%20Takes%20a%20Walk", "The%20Young%20Widower's%20Handbook"
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
export default relaxedTitles;