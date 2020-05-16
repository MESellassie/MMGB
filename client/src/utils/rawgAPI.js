import axios from "axios";
const BASEURL = "https://api.rawg.io/api/games/";
const gameTitles = [
  "halo-combat-evolved", "Zelda", "Metroid", "Mario",
]

export default {
  // random: function() {
  //   let randomTitle = gameTitles[Math.floor(Math.random()*gameTitles.length) + 1];
  //   //make the order of vowel and consonant random too:
  //   console.log(BASEURL + randomTitle)

  //   return axios.get(BASEURL + randomTitle);
  // },
  
  getGameData: function(title) {
    return axios.get(BASEURL + title );
   
  }
};
