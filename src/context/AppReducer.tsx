import { TransactionItem } from "../interfaces/Data";

export const AppReducer = (
  state: {
    transactions: TransactionItem[];
    deleteTransaction: (id: number) => void;
    addTransaction: (item: TransactionItem) => void;
  },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
