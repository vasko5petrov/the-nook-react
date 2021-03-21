import axios from 'axios';

export default class dataApi {
    static getData() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }
}