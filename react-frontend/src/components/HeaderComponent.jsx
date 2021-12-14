import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';


function HeaderComponent() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log(isUserLoggedIn)


    let navigate = useNavigate();
    function logout(){
        AuthenticationService.logout()
        navigate('/login')
    }
    return (
        <div>
                <header>
                    <nav className="navbar navbar-expand-mid navbar-dark bg-dark">
                    <div><a href="www.google.com" className="navbar-brand">Employee Management App</a></div>
                    {isUserLoggedIn && <button className='btn btn-danger'  onClick={logout}>Log Out</button>}
                    </nav>

                </header>
            </div>
    );
}

export default HeaderComponent;
