import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const ListEm = () => {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployees();
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
      .then(() => {
        if (employees) {
          setEmployee(employees.filter((emp) => emp.id !== id));
        }
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div className="flex flex-col  bg-blend-lighten ">
      <div className="flex-grow p-6">
        <h1 className="text-4xl text-center text-white">
          Welcome to EM Service!
        </h1>
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-slate-700 hover:bg-blue-700 py-3 px-3 text-white rounded-t-lg"
        >
          Add Employee
        </button>
      </div>
      <div className="px-6">
        <table className="shadow ">
          <thead className="text-white">
            <tr>
              <th className="bg-gray-700 px-4 py-2">Name</th>
              <th className="bg-gray-700 px-4 py-2">Email</th>
              <th className="bg-gray-700 px-4 py-2">Phone</th>
              <th className="bg-gray-700 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr className=" hover:text-black hover:bg-white text-white">
                <td className=" px-4 py-2 ">{employee.name}</td>
                <td className=" px-4 py-2 ">{employee.email}</td>
                <td className=" px-4 py-2 ">{employee.phone}</td>
                <td className=" px-4 py-2">
                  <button
                    onClick={(e, id) => editEmployee(e, employee.id)}
                    className="bg-blue-500 hover:bg-blue-400 py-1 px-2 text-white rounded my-1 mx-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e, id) => deleteEmployee(e, employee.id)}
                    className="bg-red-500 hover:bg-red-400 py-1 px-2 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEm;
