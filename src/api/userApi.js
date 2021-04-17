import axios from 'axios';

export default class userApi {
    static register(data) {
        return axios.post('/api/createUser', data);
    }

    static login(data) {
        return axios.post('/api/authenticate', data);
    }

    static getUser() {
        return axios.get('/api/getUser', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        });
    }
}