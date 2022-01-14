import axios from '../services/config'

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService{

createUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
//get user
getUser(){
        return axios.get(USER_API_BASE_URL);
    }

}

export default new UserService();