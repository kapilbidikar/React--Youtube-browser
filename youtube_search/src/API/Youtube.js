import axios from 'axios'

const KEY = "your-API-key"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    
});
