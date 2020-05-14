import axios from "axios";
const BASEURL = "https://api-v3.igdb.com/games/";
const APIKEY = "bfa9f5c7e59e3153c0c579e5eb6becdd"

export default {
  random: function() {
    return axios.get(BASEURL + APIKEY).then(response => {
      console.log(response.data);
      return response.data;
    });
  },
  getGame: function() {
    const vowels = "aeiou";
    const consonants = "qzwrtpsdfghjklcvbnm";
    let randomVowel = vowels[Math.floor(Math.random()*vowels.length) + 1];
    let randomConsonant = consonants[Math.floor(Math.random()*consonants. length) +1];
    //let randomYear = Math.floor(Math.random()*10 + 2010);
    //make the order of vowel and consonant random too:
    let firstLetter, secondLetter;
    if (Math.random() > .5 ) {
      firstLetter = randomVowel;
      secondLetter = randomConsonant;
    } else {
      firstLetter = randomConsonant;
      secondLetter = randomVowel;
    }
    return axios({
      url: `https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games?search=${firstLetter+secondLetter}genre.name&fields=name`,
      method: 'GET',
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          // 'Accept': 'application/json',
          'user-key': APIKEY
      },

      data: "game,name,platform;"
    })
      .then(response => {
          console.log(response);
          return response;
      })
      .catch(err => {
          console.error(err);
      });
  }
};