export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const ADD_SALE = "ADD_SALE";
export const REMOVE_SALE = "REMOVE_SALE";
export const UPDATE_SALE = "UPDATE_SALE";
export const LOGOUT = "LOGOUT";

//Checagem para Login
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
    dispatch(loginFailure("Preencha todos os campos de login!"));
    return;
  }

  dispatch(loginRequest(credentials));

  const { user } = getState();
  const { users } = user;

  const foundUser = users.find(
    (u) => u.email === credentials.email && u.senha === credentials.senha
  );

  if (foundUser) {
    dispatch(loginSuccess(foundUser));
  } else {
    dispatch(loginFailure("Email ou senha incorretos."));
  }
};

//Ação Logout
export const logout = () => ({
  type: LOGOUT,
});

//Crud vendas
export const addSale = (sale) => ({
  type: ADD_SALE,
  payload: sale,
});

export const removeSale = (saleId) => ({
  type: REMOVE_SALE,
  payload: saleId,
});

export const updSale = (sale) => ({
  type: UPDATE_SALE,
  payload: sale,
});
