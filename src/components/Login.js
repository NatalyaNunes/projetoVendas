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
      <div class="left">
        <span class="text-opaco">VendUp</span>
      </div>
      <div class="right">
        <div class="forms text-blue">
          <h2>Login</h2>
          <form onSubmit={onSubmit}>
            <div class="text-blue cardinput mt">
              <label for="email">Email</label>
              <input
                type="email"
                class="bg-ligth"
                placeholder="email.exemplo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="cardinput mt">
              <label for="senha">Senha</label>
              <input
                type="password"
                class="bg-ligth"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button class="but mt" type="submit">
              Login
            </button>
            {error && <p class="mt text-red">{error}</p>}
          </form>
        </div>
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
