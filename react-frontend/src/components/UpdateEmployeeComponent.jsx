import React, {useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployeeComponent(props) {
    let params = useParams();
    const id = params.id;
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[emailId, setEmailId] = useState('');
    
    const changeFirstNameHandler = (e) =>{
        setFirstName(e.target.value);
    }
    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res) =>{
            let employee = res.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmailId(employee.emailId);
            

        })}
       
    ,[id])

    let navigate = useNavigate();
    const updateEmployee = (e) =>{
        e.preventDefault();
        let employee={firstName: firstName,lastName: lastName,emailId:emailId};
        console.log('employee =>' + JSON.stringify(employee))
        EmployeeService.updateEmployee(employee,id).then(res =>{
            navigate('/employees');
        })
        
    }
    function cancel (){
        navigate('/employees');
    }
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Employee</h3>
                                <div className='card-body'>
                                <form>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={firstName} onChange={changeFirstNameHandler} />
                                    <label>Last Name:</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                                    <label>Email Address:</label>
                                        <input placeholder='Email Address' name='emailId' className='form-control'
                                            value={emailId} onChange={(e)=>setEmailId(e.target.value)} />

                                    <button className='btn btn-success' onClick={updateEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={cancel}>Cancel</button>

                                    
                                </div>
                                </form>
                                </div>
                         </div>
                    </div>
                 </div>
                
            </div>
        );
    
}

export default UpdateEmployeeComponent