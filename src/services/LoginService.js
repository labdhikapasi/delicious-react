
import axios from 'axios';

const LOGIN_URL = "http://172.18.0.3:8089/login";


class LoginService {
    
    loginUser(user){
        return axios.post(LOGIN_URL,user);
    }
}

export default new LoginService();