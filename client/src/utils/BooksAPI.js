import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=/api/books/";
const vowels = "aeiou";
const consonants = "qzwrtpsdfghjklcvbnm";

export default {
  random: function() {
    let randomVowel = vowels[Math.floor(Math.random()*vowels.length) + 1];
    let randomConsonant = consonants[Math.floor(Math.random()*consonants. length) +1];
        //make the order of vowel and consonant random too:
        let firstLetter, secondLetter;
    if (Math.random() > .5 ) {
      firstLetter = randomVowel;
      secondLetter = randomConsonant;
    } else {
      firstLetter = randomConsonant;
      secondLetter = randomVowel;
    }
    
    let randomParams = `&t=${firstLetter+secondLetter}`;
    console.log(BASEURL + randomParams);
    console.log("RIGHT HERE!!!!!");
    return axios.get(BASEURL + randomParams);
  },

  getBookData: function(title) {
    return axios.get(BASEURL + title);
  }

};