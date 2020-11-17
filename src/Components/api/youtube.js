import axios from 'axios';
const KEY = "AIzaSyDWexUU4P7vEV22LYTk-UZnRQEYrpvfeQo";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'statistics',
        // maxResults:5,
        key:KEY
    },
    headers:{}
})