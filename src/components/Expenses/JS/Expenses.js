import "../CSS/Expenses.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "../../ExpensesNew/JS/ExpenseFilter";

function Expenses(props) {
  
  const [enteredYear, setEnteredYear] = useState('2022');
  const filterByYear = (year) => {
    setEnteredYear(year)
  }
  let items = props.items.filter(item => {
    return enteredYear === item.date.getFullYear(); 
  });
  return (
    <div className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterByYear={filterByYear}/>
      {items.map(item =>  <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>)}
    </div>
  );
}
export default Expenses;
