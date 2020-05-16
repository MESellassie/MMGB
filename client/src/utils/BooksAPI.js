import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=/api/books/";
const bookTitles = [
  "The%20Happiness%20Project", "The%20Art%20of%20Happiness", "Year%20of%20Yes", "Big%20Magic", "The%20Gifts%20of%20Imperfection", "A%20Manual%20for%20Heartache",
]

export default {
  random: function() {
    let randomTitle = bookTitles[Math.floor(Math.random()*bookTitles.length) + 1];
    //make the order of vowel and consonant random too:


    return axios.get(BASEURL + randomTitle);
  },

  getBookData: function(title) {
    return axios.get(BASEURL + title);
  }

};