import axios from "axios";
const BASEURL = "https://deezerdevs-deezer.p.rapidapi.com/track/";
const APIKEY = "3fa4f5fc7amsha949b3cfed30da8p1e1f0cjsn53c96fd097d2";
const songTitles = [
  "13204278", "116348656", "63266242", "142844852", "4188290", "79875064", "880181", "68095456", "3098840", "111780390"
]

export default {
  random: function () {
    let randomSongTitles = songTitles[Math.floor(Math.random() * songTitles.length) + 1];
    return axios.get(BASEURL + randomSongTitles + APIKEY);
  }
};