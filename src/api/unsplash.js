import axios from 'axios'
/*pre-defined configuration*/
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: process.env.REACT_APP_UNSPLASH_CLIENT_ID },
})