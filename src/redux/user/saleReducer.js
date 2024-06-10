import { ADD_SALE, REMOVE_SALE, UPDATE_SALE } from "./actions";

const initialState = {
  sales: [],
  total: 0,
};

const calculateTotal = (sales) => {
  return sales.reduce((total, sale) => {
    const valor = parseFloat(sale.valor.replace('R$', '').replace(/\./g, '').replace(',', '.'));
    return total + valor;
  }, 0);
};

const saleReducer = (state = initialState, action) => {
  let newSales;

  switch (action.type) {
    case ADD_SALE:
      newSales = [...state.sales, action.payload];
      return {
        ...state,
        sales: newSales,
        total: calculateTotal(newSales),
      };
    case REMOVE_SALE:
      newSales = state.sales.filter((sale) => sale.id !== action.payload);
      return {
        ...state,
        sales: newSales,
        total: calculateTotal(newSales),
      };
    case UPDATE_SALE:
      newSales = state.sales.map((sale) =>
        sale.id === action.payload.id ? action.payload : sale
      );
      return {
        ...state,
        sales: newSales,
        total: calculateTotal(newSales),
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
