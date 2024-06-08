import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import Cadastro from "./components/forms/Cadastro";
import Table from "./components/Table";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={ <PrivateRoute><Home/></PrivateRoute>}/>
          <Route path="/cadastro" element={<PrivateRoute><Cadastro/></PrivateRoute>}/>
          <Route path="/vendas" element={<PrivateRoute><Table/></PrivateRoute>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
