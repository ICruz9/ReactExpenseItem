import "../CSS/ExpensesList.css";
import React from "react";
import ExpenseItem from "../../Expenses/JS/ExpenseItems";

function ExpensesList(props) {
  let expenseContent = <h2 className="expenses-list__fallback">No expenses found.</h2>
  if(props.items.length > 0){
      expenseContent = props.items.map((item) => (<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>))
  }
  return (
    <div className="expenses-list">
      {expenseContent}
    </div>
  );
}
export default ExpensesList;
