import axios from "axios";
import igdb from "igdb-api-node";
const BASEURL = "https://api-v3.igdb.com/games/";
//const APIKEY = "bfa9f5c7e59e3153c0c579e5eb6becdd"
const client = igdb('bfa9f5c7e59e3153c0c579e5eb6becdd');

export default {
  random: function() {
    return axios.get(BASEURL + APIKEY).then(response => {
      console.log(response.data);
      return response.data;
    });
  }
  // getGame: function() {
  //   const vowels = "aeiou";
  //   const consonants = "qzwrtpsdfghjklcvbnm";
  //   let randomVowel = vowels[Math.floor(Math.random()*vowels.length) + 1];
  //   let randomConsonant = consonants[Math.floor(Math.random()*consonants. length) +1];
  //   let randomYear = Math.floor(Math.random()*10 + 2010);
  //   //make the order of vowel and consonant random too:
  //   let firstLetter, secondLetter;
  //   if (Math.random() > .5 ) {
  //     firstLetter = randomVowel;
  //     secondLetter = randomConsonant;
  //   } else {
  //     firstLetter = randomConsonant;
  //     secondLetter = randomVowel;
  //   }
  //   return axios({
  //     url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
  //     method: 'POST',
  //     headers: {
  //        "Access-Control-Allow-Origin": "*",
  //         'Accept': 'application/json',
  //         'user-key': APIKEY
  //     },
  //     data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
  //   })
  //     .then(response => {
  //         console.log(response.data);
  //     })
  //     .catch(err => {
  //         console.error(err);
  //     });
  // }
};