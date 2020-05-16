import axios from "axios";
const BASEURL = "https://api.rawg.io/api/games/";
const vowels = "4";
const consonants = "51";

export default {
  random: function() {
    let randomVowel = vowels[Math.floor(Math.random()*vowels.length) + 1];
    let randomConsonant = consonants[Math.floor(Math.random()*consonants. length) +1];
    let randomYear = Math.floor(Math.random()*20 + 2000);
    //make the order of vowel and consonant random too:
    let firstLetter, secondLetter;
    if (Math.random() > .5 ) {
      firstLetter = randomVowel;
      secondLetter = randomConsonant;
    } else {
      firstLetter = randomConsonant;
      secondLetter = randomVowel;
    }
    
    let randomParams = `&t=${firstLetter+secondLetter}&y=${randomYear}`;
    return axios.get(BASEURL + randomParams );
  },

  getGameData: function(title) {
    return axios.get(BASEURL + title );
  }


};
