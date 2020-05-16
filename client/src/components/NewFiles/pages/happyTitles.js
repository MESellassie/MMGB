const happySeeds = {
  gameTitles: [
    "Halo", "Zelda", "Metroid", "Mario",
  ],

  movieTitles: [
    "Despicable+Me", "Inside+Out", "Crazy+Rich+Asians", "Happy+Feet", "La+La+Land", "Girls+Trip", "Brides+Maids", "Mamma+Mia", "The+Princess+Bride", "Clueless", "Ferris+Bueller's+Day+Off", "Groundhog+Day", "Big", "The+Birdcage", "Grease", "Mrs.+Doubtfire", "Love+Actually", "10+Things+I+Hate+About+You", "Happy+Gilmore", "Big+Fish", "My+Big+Fat+Greek+Wedding", "Legally+Blonde", "Elf", "50+First+Dates", "The+Wizard+of+Oz", "The+Princess+Diaries", "How+to+Lose+a+Guy+in+10+Days", "Matilda", "Bring+it+On", "Sex+and+the+City", "School+of+Rock", "Sister+Act", "500+Days+of+Summer", "Last+Holiday", "Amelie", "The+Blues+Brothers", "The+Devil+Wears+Prada", "Sound+of+Music", "The+Help", "Little+Miss+Sunshine", "The+Emperor's+New+Groove", "The+Muppet+Christmas+Carol", "Freaky+Friday", "Aladdin", "An+American+Tail", "Singin'+in+the+Rain", "Zootopia", "Shakespeare+in+Love", "Harry+Potter+and+the+Sorcerer's+Stone", "Ocean's+Eleven", "Coming+to+America", "Love+Actually", "Frozen", "Cloudy+with+a+Chance+of+Meatballs", "Breakfast+at+Tiffany's", "Pitch+Perfect", "Toy+Story", "Four+Weddings+and+a+Funeral", "Mary+Poppins", "Forest+Gump", "Rush+Hour", "Enchanted", "The+Lego+Movie", "Jerry+Maguire", "The+Preacher's+Wife", "Soul+Food", "Best+Man+Holiday", "Friday", "Friday+After+Next", "Almost+Christmas", "Bend+it+Like+Beckham", "A+League of+Their+Own",
  ],
  bookTitles: [
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