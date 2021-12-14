


class AuthenticationService {

    registerSuccessfulLogin(username,password){
        //keeps the session of the userinfo
        sessionStorage.setItem('authenticatedUser',username);
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