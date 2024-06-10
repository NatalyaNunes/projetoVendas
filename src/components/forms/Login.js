import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/user/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ login, isAuthenticated, error }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, senha });
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Você está logado!");
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setEmail("");
      setSenha("");
    }
  }, [error]);

  return (
    <main className="home">
      <div className="box shadow">
        <form onSubmit={onSubmit}>
          <h2>Login VendUp</h2>
          <div className="inputbox">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
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
            <label htmlFor="email">Email</label>
          </div>
          <div className="inputbox">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-lock"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </i>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label htmlFor="senha">Senha</label>
          </div>
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" name="remember" className="" />
              <label htmlFor="remember">Salvar Login</label>
            </div>
            <div className="forgot-password">
              <a className="aLogin" href="#">Esqueceu a senha?</a>
            </div>
          </div>
          <button className="but mt mb" type="submit">
            Login
          </button>
          <div class="options">
            <span>Novo no VendUp? <a className="aLogin" href="#">Crie sua conta aqui!</a></span>
          </div>
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
