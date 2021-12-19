import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http:localhost:3000/api',
});

// axios.interceptors.response.use((res) => {
//     return res
// }, (error) => {
//     if (error.status)
// }
// )
