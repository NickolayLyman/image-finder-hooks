import axios from 'axios';

const key = '19823143-e5d054b038f568b2343c680be';
const imgType = 'photo';
const orientation = 'horizontal';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key,
  imgType,
  orientation,
  per_page: 12,
};

async function fetchImg(queryKey, page) {
  try {
    const { data } = await axios({
      params: { q: queryKey, page },
    });
    return data.hits;
  } catch (error) {
    new Error('No respose from server');
  }
}

export default fetchImg;
