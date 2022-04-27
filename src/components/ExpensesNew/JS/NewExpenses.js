import "../CSS/NewExpenses.css";
import FormExpense from "./FormExpense";



const NewExpenses = (props) => {
    const saveExpenseData = (expenseData) => {
        props.onSaveExpenseData(expenseData)
    }
  return (
    <div className='new-expense'>
          <FormExpense onSaveExpenseData={saveExpenseData} />
    </div>
  );
}

export default NewExpenses;
