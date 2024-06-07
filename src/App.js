import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import Cadastro from "./components/forms/Cadastro";
import Table from "./components/Table";
import Login from "./components/Login";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/sidebar" element={<SideBar/>}/>
          <Route path="/vendas" element={<Table/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
