import React, { useState } from "react";
import "../CSS/FormExpense.css";



const FormExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);
    /*
    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });
    
    const titleChangedHandler  = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }
    */
    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm(false);
    }

    const unshowFormHandler = () => {
        setShowForm(false);
    };
  
    const showFormHandler = () => {
        setShowForm(true);
    };
  const formContent =
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangedHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangedHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangedHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={unshowFormHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
      </form>
  const buttonAddNew = (
    <button onClick={showFormHandler}>Add New Expense</button>
  );

  return showForm ? formContent : buttonAddNew;
}

export default FormExpense;
