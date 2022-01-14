import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';


function HeaderComponent() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    


    let navigate = useNavigate();
    function logout(){
        AuthenticationService.logout()
        navigate('/login')
    }
    return (
        <div>
                <header>
                    <nav className="navbar navbar-expand-mid navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">Employee Management App</a></div>
                    {isUserLoggedIn && <button className='btn btn-danger'  onClick={logout}>Log Out</button>}
                    {!isUserLoggedIn && <button className='btn btn-danger' onClick={()=>navigate('/register')}> Sign up</button>}
                    </nav>

                </header>
            </div>
    );
}

export default HeaderComponent;
