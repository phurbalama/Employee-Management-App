//import axios from 'axios'
import axios from '../services/config'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"


class EmployeeService {

    getEmployees(){
       
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    //sending form data to rest api 
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    //gets the employeeId from the url
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
    //updating employee data 
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee)
    }
    //delete Employee data
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeId)
    }
    
}

export default new EmployeeService()