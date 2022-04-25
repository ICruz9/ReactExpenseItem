import "../CSS/ExpenseItems.css"

function ExpenseItem(){
    return(
        <div className="expense-item">
            <div>25 april 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$295.45</div>
            </div>
        </div>

    )
}

export default ExpenseItem;







