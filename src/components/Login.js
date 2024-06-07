// src/components/Login.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/user/actions';

const Login = ({ login, error }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        login({ email, senha });
    };

    return (
        <div>
          <h2>Login</h2>
          {error && <p>{error}</p>}
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
  error: state.user.error,
});

export default connect(mapStateToProps, { login })(Login);
