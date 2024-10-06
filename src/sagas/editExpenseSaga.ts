import { put, takeEvery } from "redux-saga/effects";
import { ExpenseActionType } from "../schema/expense";
import {
  EditExpense,
  failedAddExpense,
  successfulEditExpense,
} from "../reducers/Expense/expenseReducer";

function* onEditExpense(action: ExpenseActionType): Generator {
  try {
    yield put({
      type: successfulEditExpense.type,
      payload: action.payload,
    });
  } catch (error) {
    console.error("Error Editing Expense", error);
    yield put({ type: failedAddExpense.type, payload: {} });
  }
}

export default function* editExpenseSaga(): Generator {
  yield takeEvery(EditExpense.type, onEditExpense);
}
