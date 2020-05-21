const happySeeds = {
  gameTitles: [
    "54326", "52769", "27989", "52371", 
    "5644", "3179", "22509", "3254", "42187", "3771"
  ],
  movieTitles: [
    "Despicable+Me", "Inside+Out", "Crazy+Rich+Asians", "Happy+Feet", "La+La+Land", "Brides+Maids", "Mamma+Mia", "Ferris+Bueller's+Day+Off", "Groundhog+Day", "Grease", "Mrs.+Doubtfire","Happy+Gilmore"
  ],
  bookTitles: [
    "The%20Happiness%20Project", "The%20Art%20of%20Happiness", "Year%20of%20Yes", "Big%20Magic", "The%20Gifts%20of%20Imperfection", "A%20Manual%20for%20Heartache", "Authentic%20Happiness", "The%20How%20of%20Happiness", "The%20Little%20Paris%20Bookshop", "The%20Storied%20Life%20of%20A.J.%20Fikry",
    "The%20Old%20Man%20and%20the%20Sea",
     "The%20Storied%20Life%20of%20A%20J", "The%20Art%20of%20Happiness", "Feeling%20Good", "Lola%20and%20the%20Boy%20Next%20Door", "Dumplin", "Joyful", "Gmorning%20Gnight",
  ],
  musicTitles: [
    "394338442", "108889104", "538660022", "628266", "1564993", "2437594", "130688210", "625643", "366916761", "89779813"
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

export default happySeeds;