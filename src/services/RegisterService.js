import axios from 'axios';

const   REGISTER_URL = "http://172.18.0.3:8089/register";

class RegisterService{
    createUser(user){
        return axios.post(REGISTER_URL,user);
    }
}
export default new RegisterService()