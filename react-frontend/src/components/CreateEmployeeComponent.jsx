import React, {useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent (){
    const params = useParams();
    const id = params.id;
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[emailId, setEmailId] = useState('');
    
    useEffect(()=>{
        if(id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(id).then((res) =>{
                let employee = res.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmailId(employee.emailId);
                
    
            })}

        }
        
       
    ,[id])
    const changeFirstNameHandler = (e) =>{
        setFirstName(e.target.value);
    }
    let navigate = useNavigate();
    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();
        let employee={firstName: firstName,lastName: lastName,emailId:emailId};
        console.log('employee =>' + JSON.stringify(employee))
        
        if(id ==='_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                navigate('/employees')
            })
        }else{
            EmployeeService.updateEmployee(employee,id).then(res =>{
                navigate('/employees');
            })
        }
       
    }
    function cancel (){
        navigate('/employees');
    }
    function getTitle(){
        if(id ==='_add')
        {
            return <h3 className='text-center'>Add Employee</h3>
        }
        else{
            return <h3 className='text-center'>Update Employee</h3>
        }
    }
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {getTitle()}
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

                                    <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Save</button>
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

export default CreateEmployeeComponent;