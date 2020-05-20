import axios from 'axios'

const KEY = "AIzaSyCa3aJzezGTbAaHyB7HstZTrlZGnKzS-lw"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    
});