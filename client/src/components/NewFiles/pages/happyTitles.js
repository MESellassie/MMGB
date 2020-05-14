import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";
const happyMovieTitles=[
  "Despicable Me", "Inside Out", "Crazy Rich Asians", "Happy Feet",
]


export default {
  random: function() {
    let randomMovieTitles = happyMovieTitles[Math.floor(Math.random()*happyMovieTitles.length) + 1];
    return axios.get(BASEURL + randomMovieTitles + APIKEY);
  }
};


