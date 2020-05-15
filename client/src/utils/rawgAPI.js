import axios from "axios";
const BASEURL = "https://rawg-video-games-database.p.rapidapi.com/games/";
const APIKEY = "2c1fcbabc0msh76e04ec2973e683p1fc488jsne1661eff5e77";
const vowels = "aeiou";
const consonants = "qzwrtpsdfghjklcvbnm";

// export default {
//   random: function() {
//     let randomVowel = vowels[Math.floor(Math.random()*vowels.length) + 1];
//     let randomConsonant = consonants[Math.floor(Math.random()*consonants. length) +1];
//     let randomYear = Math.floor(Math.random()*20 + 2000);
//     //make the order of vowel and consonant random too:
//     let firstLetter, secondLetter;
//     if (Math.random() > .5 ) {
//       firstLetter = randomVowel;
//       secondLetter = randomConsonant;
//     } else {
//       firstLetter = randomConsonant;
//       secondLetter = randomVowel;
//     }
    
//     let randomParams = `&t=${firstLetter+secondLetter}&y=${randomYear}`;
//     return axios.get(BASEURL + )



function rawgAPI(){

    axios({
        "method":"GET",
        "url":"https://rawg-video-games-database.p.rapidapi.com/games/halo-combat-evolved",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key":"2c1fcbabc0msh76e04ec2973e683p1fc488jsne1661eff5e77",
        "useQueryString":true
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })

}

export default rawgAPI;

