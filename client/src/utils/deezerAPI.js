import axios from "axios";
const APIKEY = "3fa4f5fc7amsha949b3cfed30da8p1e1f0cjsn53c96fd097d2";
const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 30000,
  headers: { 'X-RapidAPI-Key': APIKEY }
});
const songTitles = [
  "394338442", "108889104", "538660022", "628266", "1564993", "2437594", "130688210", "625643", "366916761", "89779813", "552496572", "424564372", "3614665", "678184", "877873612", "62376277", "582143242", "773430", "3106505", "15078245", "1109731", "576431", "715929", "518458092", "4311597", "137234202", "92720102", "61424044", "4091624", "627421182", "13204278", "116348656", "63266242", "142844852", "4188290", "79875064", "880181", "68095456", "3098840", "111780390"
]
export default {
  random: function () {
    let randomSongTitles = songTitles[Math.floor(Math.random() * songTitles.length) + 1];
    console.log("this is the deezer api test" + randomSongTitles)
    return request.get(`track/${randomSongTitles}`)
      .catch(error => console.log(error));
  },
  getSongData: function (title) {
    return request.get(`track/${title}`)
      .catch(error => console.log(error));
  }
};