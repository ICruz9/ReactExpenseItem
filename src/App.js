import { useState } from "react";
import Expenses from "./components/Expenses/JS/Expenses.js";
import NewExpenses from "./components/ExpensesNew/JS/NewExpenses.js";
function App() {
  const dataExpenses = [{
    id:'I1',
    title:'Item 1',
    amount: 94.15,
    date: new Date(2021,7,14)
  },{
    id:'I2',
    title:'Item 2',
    amount: 45.96,
    date: new Date(2022,8,21)
  },{
    id:'I3',
    title:'Item 3',
    amount: 91.46,
    date: new Date(2022,2,5)
  }];
  const [expenses, setExpenses] = useState(dataExpenses);
  const saveExpenseData = (expenseNew) => {
    setExpenses(prevExpenses => {
      return [expenseNew, ...dataExpenses];
    });
  }
  return (
    <div>
      <NewExpenses onSaveExpenseData={saveExpenseData}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
