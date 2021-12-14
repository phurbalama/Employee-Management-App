import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import ListEmployeeComponent from '../components/ListEmployeeComponent';
import LoginComponent from '../components/LoginComponent';
import AuthenticationService from './AuthenticationService';


function AuthenticatedRoute(props) {
    let navigate = useNavigate();
    if (AuthenticationService.isUserLoggedIn()){
        return props.children;
    }
    return <LoginComponent/>;
  
}

export default AuthenticatedRoute;