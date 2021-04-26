
import axios from 'axios';

const LOGIN_URL = "http://localhost:8089/login";


class LoginService {
    
    loginUser(user){
        return axios.post(LOGIN_URL,user);
    }
}

export default new LoginService();