/* eslint-disable @typescript-eslint/no-unused-vars */

import { ExpenseActionType, ExpenseStoreType } from "../../schema/expense";

const deleteExpense = {
  DeleteExpense: (state: ExpenseStoreType, _action: ExpenseActionType) => {
    state.requestPending = true;
    return;
  },
  successfulDeleteExpense: (
    state: ExpenseStoreType,
    action: ExpenseActionType,
  ) => {
    //delete an expense
    state.requestPending = false;
    state.expenses = state.expenses.filter(
      (expense) => expense.id !== action.payload.id,
    );
    //delete from local storage
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
    return;
  },
  failedDeleteExpense: (
    state: ExpenseStoreType,
    _action: ExpenseActionType,
  ) => {
    state.requestPending = false;
    return;
  },
};

export default deleteExpense;
