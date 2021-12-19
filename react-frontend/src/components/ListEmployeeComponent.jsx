import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


function ListEmployeeComponent() {
        
        const [employees, setEmployee] = useState([]);
       
    
    //method gets called before rendering
    useEffect(()=>{
        EmployeeService.getEmployees().then((res)  =>{
            setEmployee(res.data)
    })
},[])
  
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



/*
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


class ListEmployeeComponent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    //method gets called before rendering
    componentDidMount(){
        EmployeeService.getEmployees().then((res)  =>{
            this.setState({employees: res.data});
        })
    }
    addEmployee(){
        let navigate = useNavigate();
        navigate('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
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
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}
*/

export default ListEmployeeComponent;