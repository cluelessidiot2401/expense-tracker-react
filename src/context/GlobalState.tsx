import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { TransactionItem } from "../interfaces/Data";

// Initial State
const initialState: {
  transactions: TransactionItem[];
  deleteTransaction: (id: number) => void;
  addTransaction: (item: TransactionItem) => void;
} = {
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component to wrap stuff inside
export const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(item: TransactionItem) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
