import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {    regionCode: 'PK',    maxResults: 50,},
    headers: {
      'X-RapidAPI-Key': 'aec7505980mshc81894e575db0a9p1da5edjsnb9c239b9ae48',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};