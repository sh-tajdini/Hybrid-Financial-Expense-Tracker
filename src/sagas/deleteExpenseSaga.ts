import { put, takeEvery } from "redux-saga/effects";
import { ExpenseActionType } from "../schema/expense";
import {
  DeleteExpense,
  failedDeleteExpense,
  successfulDeleteExpense,
} from "../reducers/Expense/expenseReducer";

function* onDeleteExpense(action: ExpenseActionType): Generator {
  try {
    yield put({
      type: successfulDeleteExpense.type,
      payload: action.payload,
    });
  } catch (error) {
    console.error("Error deleting Expense", error);
    yield put({ type: failedDeleteExpense.type, payload: {} });
  }
}

export default function* deleteExpenseSaga(): Generator {
  yield takeEvery(DeleteExpense.type, onDeleteExpense);
}
