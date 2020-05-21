const titleSeeds = {
    gameTitles: [
      "Zelda", "Metroid", "Mario", "Castlevania", "23659", "29153", "12536", "320", "654", "5538", "13434", "3328", "3494", "20156", "3498", "22511", "28", "58175", "3990", "58829", "58134", "282825", "259801", "3287", "274757", "50796", "421698", "58818", "339958", "3254", "517", "455", "281837", "7381"


    ],
  
    movieTitles: [
      "Despicable+Me", "Inside+Out", "Crazy+Rich+Asians", "Happy+Feet", "La+La+Land", "Girls+Trip", "Brides+Maids", "Mamma+Mia", "The+Princess+Bride", "Clueless", "Ferris+Bueller's+Day+Off", "Groundhog+Day", "Big", "The+Birdcage", "Grease", "Mrs.+Doubtfire", "Love+Actually", "10+Things+I+Hate+About+You", "Happy+Gilmore", "Big+Fish", "My+Big+Fat+Greek+Wedding", "Legally+Blonde", "Elf", "50+First+Dates", "The+Wizard+of+Oz", "The+Princess+Diaries", "How+to+Lose+a+Guy+in+10+Days", "Matilda", "Bring+it+On", "Sex+and+the+City", "School+of+Rock", "Sister+Act", "500+Days+of+Summer", "Last+Holiday", "Amelie", "The+Blues+Brothers", "The+Devil+Wears+Prada", "Sound+of+Music", "The+Help", "Little+Miss+Sunshine", "The+Emperor's+New+Groove", "The+Muppet+Christmas+Carol", "Freaky+Friday", "Aladdin", "An+American+Tail", "Singin'+in+the+Rain", "Zootopia", "Shakespeare+in+Love", "Harry+Potter+and+the+Sorcerer's+Stone", "Ocean's+Eleven", "Coming+to+America", "Love+Actually", "Frozen", "Cloudy+with+a+Chance+of+Meatballs", "Breakfast+at+Tiffany's", "Pitch+Perfect", "Toy+Story", "Four+Weddings+and+a+Funeral", "Mary+Poppins", "Forest+Gump", "Rush+Hour", "Enchanted", "The+Lego+Movie", "Jerry+Maguire", "The+Preacher's+Wife", "Soul+Food", "Best+Man+Holiday", "Friday", "Friday+After+Next", "Almost+Christmas", "Bend+it+Like+Beckham", "A+League of+Their+Own", "22+July", "Patriots+Day", "Stronger", "Romeo+Juliet", "One+Day", "Never+Let+Me+Go", "Eternal+Sunshine+of+the+Spotless+Mind", "Finding+Neverland", "My+Sisters+Keeper", "The+Notebook",         "Con+Air", "Avengers+Infinity+War", "The+Matrix", "Back+To+The+Future", "Star+Wars+The+Force+Awakens", "Bad+Boys+For+Life", "The+Dark+Knight", "6+Underground", "National+Treasure", "John+Wick", "Gone+In+60+Seconds", "Confessions+of+a+Shopaholic", "The+Intern", "How+to+Lose+a+Guy+in+10+Days", "National+Treasure", "View+from+the+Top", "Deck+the+Halls", "The+Pacifier", "From+Paris+with+Love", "The+Italian+Job", "Oceans+Thirteen"

    ],

    bookTitles: [
      "The%20Old%20Man%20and%20the%20Sea","The%20Storied%20Life%20of%20A%20J", "The%20Art%20of%20Happiness", "Feeling%20Good", "Lola%20and%20the%20Boy%20Next%20Door", "Dumplin", "Joyful", "Gmorning%20Gnight", "My%20Sister's%20Keeper", "The%20Road", "Bridge%20to%20Terabithia", "Where%20the%20Red%20Fern%20Grows", "Of%20Mice%20and%20Men", "A%20Thousand%20Splendid%20Suns", "Flowers%20for%20Algernon", "We%20Were%20Liars", "The%20Time%20Traveler's%20Wife", "Atonement",         "Lord%20of%20the%20Rings", "To%20Kill%20a%20Mockingbird", "The%20Picture%20of%20Dorian%20Gray", "Catch-22", "Nineteen%20Eighty-Four", "Pride%20and%20Prejudice", "Harry%20Potter%20and%20the%20Sorcerer's%20Stone", "Hamlet", "Angels%20and%20Demons", "The%20Great%20Gatsby",         "The%20Little%20Prince", "Attachments", "Wonder", "The%20Art%20of%20Racing%20in%20the%20Rain", "Anne%20of%20Green%20Gables", "Persuasion", "Orlando", "Notes%20From%20a%20Small%20Island", "Lillian%20Boxfish%20Takes%20a%20Walk", "The%20Young%20Widower's%20Handbook"



  
    ],
    musicTitles: [
      "394338442", "108889104", "538660022", "628266", "1564993", "2437594", "130688210", "625643", "366916761", "89779813", "552496572", "424564372", "3614665", "678184", "877873612", "62376277", "582143242", "773430", "3106505", "15078245", "1109731", "576431", "715929", "518458092", "4311597", "137234202", "92720102", "61424044", "4091624", "627421182", "13204278", "116348656", "63266242", "142844852", "4188290", "79875064", "880181", "68095456", "3098840", "111780390"



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
  
  export default titleSeeds;