import "./App.css";
import Navbar from "./components/Navbar";
import ListEm from "./components/ListEm";
import AddEmployee from "./components/AddEmployee";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee ";

const basename = "/em-project-view/";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content area with two columns */}
      <main className="flex-grow p-6 flex">
        <div className="w-3/4 pr-6">
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<ListEm />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
            </Routes>
          </BrowserRouter>
        </div>

        {/* Right side description */}
        <aside className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Project Stack</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="flex items-center">
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png"
                alt="React Icon"
                className="w-6 h-6 mr-2"
              />
              <strong>Frontend:</strong> React
            </li>
            <li className="flex items-center mt-2">
              <img
                src="https://img.icons8.com/color/48/000000/spring-logo.png"
                alt="Spring Boot Icon"
                className="w-6 h-6 mr-2"
              />
              <strong>Backend:</strong> Spring Boot
            </li>
            <li className="flex items-center mt-2">
              <img
                src="https://img.icons8.com/color/48/000000/postgreesql.png"
                alt="PostgreSQL Icon"
                className="w-6 h-6 mr-2"
              />
              <strong>Database:</strong> PostgreSQL
            </li>
            <li className="flex items-center mt-2">
              <img
                src="https://img.icons8.com/color/48/000000/docker.png"
                alt="Docker Icon"
                className="w-6 h-6 mr-2"
              />
              <strong>Containerization:</strong> Docker
            </li>
          </ul>
          <p className="mt-4 text-gray-600">
            This project leverages a modern tech stack with a React frontend,
            Spring Boot backend, and PostgreSQL database. Docker is used for
            containerization, ensuring a consistent environment across
            development and production.
          </p>
        </aside>
      </main>

      {/* Footer */}
      <footer className="flex justify-center py-6 mt-auto">
        <p className="text-gray-500">© 2024 EM Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
