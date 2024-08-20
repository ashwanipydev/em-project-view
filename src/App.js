import "./App.css";
import Navbar from "./components/Navbar";
import ListEm from "./components/ListEm";
import AddEmployee from "./components/AddEmployee";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee ";

const basename = '/em-project-view/employees'

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<ListEm />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />

        </Routes>
      </BrowserRouter>

      {/* <ListEm />
      <AddEmployee /> */}

      <footer className="flex justify-center py-6 bottom-0 fixed mx-auto w-full">
        <p className="text-gray-500">© 2024 EM Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
