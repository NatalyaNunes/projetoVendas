// src/components/Login.js

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../redux/user/actions";
import { useNavigate } from "react-router-dom";

const Login = ({ login, isAuthenticated, error }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, senha });
  };

  //redirecionar após logar

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  //limpar os campo ao digitar errado ou não preencher os campos

  useEffect(() => {
    if (error) {
      setEmail("");
      setSenha("");
    }
  }, [error]);

  return (
    <main class="home">
       <div class="box shadow">
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <div class="inputbox">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </i>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email">Email</label>
        </div>
        <div class="inputbox">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></i>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <label for="senha">Senha</label>
        </div>
        <button class="but mt" type="submit">
          Login
        </button>
        {error && <p class="mt text-red">{error}</p>}
      </form>
    </div>
    </main>
   
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
  error: state.user.error,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
