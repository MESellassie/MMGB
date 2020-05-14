import axios from "axios";
const APIKEY = "3fa4f5fc7amsha949b3cfed30da8p1e1f0cjsn53c96fd097d2";

const request = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 30000,
  headers: { "X-RapidAPI-Key": API_KEY }
});

export function getTracks(search = 'Happy') {
  const tracks = request.get(`search?q=${search}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));
    return tracks
}
