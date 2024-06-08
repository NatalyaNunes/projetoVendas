// reducers/saleReducer.js

import { ADD_SALE, REMOVE_SALE } from "./actions";

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
    default:
      return state;
  }
};

export default saleReducer;
