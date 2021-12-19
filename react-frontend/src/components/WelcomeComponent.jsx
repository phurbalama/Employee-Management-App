import React from 'react';
import { useParams,Link } from 'react-router-dom';

function WelcomeComponent(props) {
    const params = useParams();
    function retrieveWelcomeMessage(){
        console.log('retrieved')

    }
    return (
        <div>
            <h1 className='text-center'>Welcome</h1>
            <div className='container text-center'>Welcome {params.name}. You can manage your employee list <Link to='/employees'>here</Link></div>
            <div className='container text-center'>Customized welcome message<button onClick={retrieveWelcomeMessage}>Get Welcome message</button></div>
            
        </div>
    );
}

export default WelcomeComponent;