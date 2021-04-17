import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-779e0.firebaseio.com/'
});

export default instance;