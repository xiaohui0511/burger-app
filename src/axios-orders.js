import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d3773.firebaseio.com/'
});

export default instance;