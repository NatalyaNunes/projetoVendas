import { ADD_SALE, REMOVE_SALE, UPDATE_SALE } from "./actions";

const initialState = {
  sales: [],
};

const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SALE:
      return {
        ...state,
        sales: [...state.sales, action.payload],
      };
    case REMOVE_SALE:
      return {
        ...state,
        sales: state.sales.filter((sale) => sale.id !== action.payload),
      };
    case UPDATE_SALE:
      return{
        ...state,
        sales: state.sales.map((sale) =>
        sale.id === action.payload.id ? action.payload : sale
        ),
      };
    default:
      return state;
  }
};

let currentId = 1;

export const getNextId = () => {
  return currentId++;
};

export default saleReducer;
