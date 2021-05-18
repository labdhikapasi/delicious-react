import axios from 'axios';

const   REGISTER_URL = "http://localhost:8089/register";

class RegisterService{
    createUser(user){
        return axios.post(REGISTER_URL,user);
    }
}
export default new RegisterService()