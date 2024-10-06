/* eslint-disable @typescript-eslint/no-unused-vars */

import { ExpenseActionType, ExpenseStoreType } from "../../schema/expense";

const editExpense = {
  EditExpense: (state: ExpenseStoreType, _action: ExpenseActionType) => {
    state.requestPending = true;
    return;
  },
  successfulEditExpense: (
    state: ExpenseStoreType,
    action: ExpenseActionType,
  ) => {
    //edit expense
    state.requestPending = false;
    state.expenses = state.expenses.map((expense) => {
      if (expense.id === action.payload.id) {
        return {
          ...expense,
          title: action.payload.title,
          amount: action.payload.amount,
          date: action.payload.date,
          category: action.payload.category,
        };
      }
      return expense;
    });
    //update local storage
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
    return;
  },
  failedEditExpense: (state: ExpenseStoreType, _action: ExpenseActionType) => {
    state.requestPending = false;
    return;
  },
};

export default editExpense;
