import axios from "axios"

const instance = axios.create({
    baseURL: 'https://go-apod.herokuapp.com/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;