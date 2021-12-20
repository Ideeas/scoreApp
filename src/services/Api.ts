import Axios from 'axios';

export const axios = Axios.create({
  baseURL: '',
});

// axios.interceptors.response.use((res) => {
//     return res
// }, (error) => {
//     if (error.status)
// }
// )
