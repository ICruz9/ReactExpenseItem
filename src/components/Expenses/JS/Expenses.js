import "../CSS/Expenses.css";
import React, { useState } from "react";
import ExpensesList from "../../ExpensesList/JS/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "../../ExpensesNew/JS/ExpenseFilter";

function Expenses(props) {
  
  const [enteredYear, setEnteredYear] = useState('2021');
  const filterByYear = (year) => {
    setEnteredYear(year)
  }
  const itemsFiltered = props.items.filter(item => {
    return enteredYear === item.date.getFullYear().toString(); 
  });
  console.log(props.items);
  
  console.log(itemsFiltered);
  return (
    <div className="expenses">
      <ExpensesFilter selectedYear={enteredYear} onFilterByYear={filterByYear}/>
      <ExpensesChart expenses={itemsFiltered} />
      <ExpensesList items={itemsFiltered}/>
    </div>
  );
}
export default Expenses;
