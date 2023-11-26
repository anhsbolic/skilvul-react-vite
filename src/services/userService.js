import axios from 'axios';

const BASE_URL_API = 'https://6526dad7917d673fd76d1b74.mockapi.io';

const getUsers = async () => {
  try {
    const url = `${BASE_URL_API}/users`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { getUsers };
