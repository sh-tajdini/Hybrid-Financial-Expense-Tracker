/* eslint-disable @typescript-eslint/no-unused-vars */
import { ExpenseActionType, ExpenseStoreType } from "../../schema/expense";

const addExpense = {
  AddExpense: (state: ExpenseStoreType, _action: ExpenseActionType) => {
    state.requestPending = true;
    return;
  },
  successfulAddExpense: (
    state: ExpenseStoreType,
    action: ExpenseActionType,
  ) => {
    state.requestPending = false;
    state.expenses.push({
      id: Math.floor(Math.random() * 1000),
      title: action.payload.title,
      amount: action.payload.amount,
      date: action.payload.date,
      category: action.payload.category,
    });
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
    return;
  },
  failedAddExpense: (state: ExpenseStoreType, _action: ExpenseActionType) => {
    state.requestPending = false;
    return;
  },
};

export default addExpense;
