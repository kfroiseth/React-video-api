import axios from 'axios';

const KEY = 'AIzaSyBfs7kKPDSFJhDy-lArScclGs-oRBTNVGQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: '5',
      key: KEY
  }
});
