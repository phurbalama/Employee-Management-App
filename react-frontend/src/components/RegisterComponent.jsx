import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";



function RegisterComponent (){
    const[userName, setUserName] = useState("");
    const[password,setPassword] = useState("");
    let[userExist,setUserExist] = useState(false);

    let navigate = useNavigate();
    function registeredSuccessfully () {
        navigate('/login');
    }
    function userExists() {
        if(userExist) return <h3 className='text-center'>User Name Exist</h3>
    }
    function handleSubmit (e) {
       e.preventDefault();
        const data = {
            userName: userName,
            password: password
        };
        console.log(userName,password);
        UserService.getUser().then(
            (res) =>{
                console.log(res.data);
                //loops through the user Db and checks if username exits
                for(let i = 0;i < res.data.length;i++){
                    if(userName === res.data[i].userName){
                        userExist = true;
                        return
                         }
                         //if it doesn't then creates Username
                         else{
                              UserService.createUser(data).then(
                                (res) =>{
                                     
                            navigate('/login')
                                }
                            ).catch((err)=>{
                                console.log(err);
                            })
                           

                         }
            }
            }
        ).catch((err) => {console.log(err)})
        
        
    }
    return(
        <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                           
                                <div className='card-body'>
                                    {userExists()}
                                <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label>User Name:</label>
                                        <input type="text" placeholder='User Name' className='form-control'
                                            value={userName} onChange={(e)=>setUserName(e.target.value)} />
                                    <label>password</label>
                                        <input type="text" placeholder='Password' className='form-control'
                                            value={password} onChange={(e)=>setPassword(e.target.value)} />
                                
                                    <button type="submit" className='btn btn-danger' onClick={(e) => handleSubmit} >Register</button>

                                    
                                </div>
                                </form>
                                </div>
                         </div>
                    </div>
                 </div>
                
            </div>
    )
}
export default RegisterComponent;