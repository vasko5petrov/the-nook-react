import axios from 'axios';

export default class userApi {
    static register(data) {
        return axios.post('/api/createUser', data);
    }
}