import React,{ useState,useEffect }  from 'react'
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const UpdateEmployee  = () => {

  const {id} = useParams();
  const [employee,setEmployee] = useState({
    id: id,  // auto-generated id
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeesById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (event) => {
    setEmployee({...employee, [event.target.name]: event.target.value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({id: "", name: "", phone: "", email: ""});
  }

  const updateEmployees = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    
    navigate("/"); // Redirect to the employees list after saving
  };

  const navigate = useNavigate();
  
  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className="text-4xl tracking-wider font-bold text-center py-4 px-4">
        <h1> Update 👨‍💻 Employee</h1>
      </div>
      <div className="mx-10 my-2">
        <input
          onChange={(e) => handleInputChange(e)}
          value={employee.name}
          type="text"
          name="name"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Name"
        ></input>
        <input
          onChange={(e) => handleInputChange(e)}
          value={employee.phone}
          type="number"
          name="phone"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Phone"
        ></input>
        <input
          onChange={(e) => handleInputChange(e)}
          value={employee.email}
          type="email"
          name="email"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Email"
        ></input>
      </div>
      <div className="w-full mx-10">
        <button 
          onClick={updateEmployees}
          className="py-2 px-6 mt-4 bg-blue-600 text-white mx-8 hover:bg-blue-700 rounded">
          Update
        </button>
        <button 
          onClick={reset}
          className="py-2 px-6 mt-4 bg-red-500 text-white hover:bg-red-700 mx-10 rounded">
          Clear
        </button>
        <button
          onClick={() => navigate("/")}
          className="py-2 px-6 mt-4 bg-orange-800 text-white hover:bg-orange-900 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default UpdateEmployee;
