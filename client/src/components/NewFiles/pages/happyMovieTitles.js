import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";
const happyMovieTitles=[
  "Despicable+Me", "Inside+Out", "Crazy+Rich+Asians", "Happy+Feet", "La+La+Land", "Girls+Trip", "Brides+Maids", "Mamma+Mia", "The+Princess+Bride", "Clueless", "Ferris+Bueller's+Day+Off", "Groundhog+Day", "Big", "The+Birdcage", "Grease", "Mrs.+Doubtfire", "Love+Actually", "10+Things+I+Hate+About+You", "Happy+Gilmore", "Big+Fish", "My+Big+Fat+Greek+Wedding", "Legally+Blonde", "Elf", "50+First+Dates", "The+Wizard+of+Oz", "The+Princess+Diaries", "How+to+Lose+a+Guy+in+10+Days", "Matilda", "Bring+it+On", "Sex+and+the+City", "School+of+Rock", "Sister+Act", "500+Days+of+Summer", "Last+Holiday", "Amelie", "The+Blues+Brothers", "The+Devil+Wears+Prada", "Sound+of+Music", "The+Help", "Little+Miss+Sunshine", "The+Emperor's+New+Groove", "The+Muppet+Christmas+Carol", "Freaky+Friday", "Aladdin", "An+American+Tail", "Singin'+in+the+Rain", "Zootopia", "Shakespeare+in+Love", "Harry+Potter+and+the+Sorcerer's+Stone", "Ocean's+Eleven", "Coming+to+America", "Love+Actually", "Frozen", "Cloudy+with+a+Chance+of+Meatballs", "Breakfast+at+Tiffany's", "Pitch+Perfect", "Toy+Story", "Four+Weddings+and+a+Funeral", "Mary+Poppins", "Forest+Gump", "Rush+Hour", "Enchanted", "The+Lego+Movie", "Jerry+Maguire", "The+Preacher's+Wife", "Soul+Food", "Best+Man+Holiday", "Friday", "Friday+After+Next", "Almost+Christmas", "Bend+it+Like+Beckham", "A+League of+Their+Own", 
]


export default {
  random: function() {
    let randomMovieTitles = happyMovieTitles[Math.floor(Math.random()*happyMovieTitles.length) + 1];
    return axios.get(BASEURL + randomMovieTitles + APIKEY);
  }
};

