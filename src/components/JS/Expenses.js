import "../CSS/Expenses.css";
import ExpenseItem from "./ExpenseItems";


function Expenses(props) {
  
  return (
    <div id='listExpenses' className="expenses">
        {props.items.map(item =>  <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>)}
    </div>
  );
}
export default Expenses;
