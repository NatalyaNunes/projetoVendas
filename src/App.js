import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import Cadastro from "./components/forms/Cadastro";
import Table from "./components/Table";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Table/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/sidebar" element={<SideBar/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
