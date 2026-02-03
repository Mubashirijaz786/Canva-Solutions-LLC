import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/api' // Make sure port matches your server
});