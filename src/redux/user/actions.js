// src/redux/user/actions.js

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (credentials) => (dispatch, getState) => {
  const { email, senha } = credentials;

    if (!email || !senha) {
        dispatch(loginFailure('Preencha todos os campos de login!'));
        return;
      }

    dispatch(loginRequest(credentials));

  const { user } = getState();
  const { users } = user;

  const foundUser = users.find(
    (u) =>
        u.email === credentials.email && u.senha === credentials.senha
  );

  if ( foundUser ) {
    dispatch(loginSuccess(foundUser));
  } else {
    dispatch(loginFailure('Email ou senha incorretos.'));
  }
};
