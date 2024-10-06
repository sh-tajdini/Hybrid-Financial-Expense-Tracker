export interface ExpenseStoreType {
  requestPending: boolean;
  expenses: ExpenseType[];
}
export interface ExpenseType {
  id: number;
  title: string;
  amount: number;
  date: Date;
  category: string;
}
export interface ExpenseActionType {
  type: string;
  payload: {
    title: string;
    amount: number;
    date: Date;
    id: number;
    category: string;
  };
}
