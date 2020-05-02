import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  random: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};