import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


function ListEmployeeComponent() {
        
        const [employees, setEmployee] = useState([]);
       
    
        
    //method gets called before rendering
    useEffect(()=>{
        EmployeeService.getEmployees().
        then((res)  =>{setEmployee(res.data)})
        .catch(error => handleError(error))
},[])
    function handleError(error){
        let errorMessage=''
        if(error.message)
            errorMessage += error.message

        if(error.response && error.response.data){
            errorMessage += error.response.data.message
        }

        console.log(errorMessage)
    }

    
  
    let navigate = useNavigate();
    function addEmployee(){
        navigate('/add-employee/_add');
    }
    function editEmployee(id){
        navigate(`/add-employee/${id}`)
    }
    function deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res=>{
            setEmployee(employees.filter(employee => employee.id !==id))
        })
        
    }
    function viewEmployee(id){
       navigate(`/view-employee/${id}`)
        
    }

        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td><button className = "btn btn-info" onClick={()=>editEmployee(employee.id)}>Update</button>
                                    <button style={{marginLeft:"10px"}}className = "btn btn-info" onClick={()=>deleteEmployee(employee.id)}>Delete</button>
                                    <button style={{marginLeft:"10px"}}className = "btn btn-info" onClick={()=>viewEmployee(employee.id)}>View</button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>

                </div>
            </div>
        );
    
}

export default ListEmployeeComponent;