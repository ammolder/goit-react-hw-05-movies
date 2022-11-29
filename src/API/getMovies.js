import axios from 'axios';

const KEY = '77e7936073a1f82fbc0d3a17a985fb5b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async (pathName, options) => {
  const response = await axios.get(`${pathName}?api_key=${KEY}&${options}`);

  return response;
};
