import axios from 'axios';

function fetchJSON<T>(url: string): Promise<T> {
  return axios.get<T>(url).then(response => response.data);
}

export default fetchJSON;
