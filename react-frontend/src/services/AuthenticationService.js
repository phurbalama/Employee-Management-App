
import axios from "axios";
import config from "../services/config";


class AuthenticationService {

    registerSuccessfulLogin(){
        let username = "admin"
        let password = "admin"
        let basicAuthHeader = 'Basic '+ window.btoa(username+":"+password)//(`${username}:${password}`)
        //keeps the session of the userinfo
        sessionStorage.setItem('authenticatedUser',username);
        
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
        //config.setupAxiosInterceptors(basicAuthHeader)
        
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