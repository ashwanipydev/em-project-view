import axios from  'axios';
const EMPOLOYEE_SAPI_BASE_URL = 'https://my-spring-boot-app-latest.onrender.com';

class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPOLOYEE_SAPI_BASE_URL,employee);
    }

    getEmployees(){
        return axios.get(EMPOLOYEE_SAPI_BASE_URL);
    };

    getEmployeesById(id){
        return axios.get(EMPOLOYEE_SAPI_BASE_URL + '/'+id);
    }

    deleteEmployeeById(id){
        return axios.delete(EMPOLOYEE_SAPI_BASE_URL+'/'+id);
    }

    updateEmployee(employee,id){
        return axios.put(EMPOLOYEE_SAPI_BASE_URL+'/'+id,employee);
    }
}

export default new EmployeeService();