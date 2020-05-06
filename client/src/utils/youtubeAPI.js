import axios from "axios";
const BASEURL = "https://www.";

export default {
  random: function() {
    return axios.get(BASEURL);
  }
};