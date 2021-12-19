
import axios from "axios";
import config from "../services/config";


class AuthenticationService {

    registerSuccessfulLogin(username,password){
        let basicAuthHeader = 'Basic '+ window.btoa(`${username}:${password}`)
        //keeps the session of the userinfo
        sessionStorage.setItem('authenticatedUser',username);
        config.setupAxiosInterceptors(basicAuthHeader)
        
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
        
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null) return false;
        return true;
    }
    

}


export default new AuthenticationService()