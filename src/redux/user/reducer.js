import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actions";

const initialState = {
  CurrentUser: null,
  isAuthenticated: false,
  error: "",
  users: [
    {
      email: "user@gmail.com",
      senha: "user123",
      nome: "Natálya",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: "Preencha todos os cmapos de login!",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        CurrentUser: action.payload,
        isAuthenticated: true,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
    return{
      ...state,
      isAuthenticated: false,
      user: null,
      CurrentUser: null,
    };
    default:
      return state;
  }
};

export default userReducer;
