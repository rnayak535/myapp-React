import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showAddexpenseForm, setAddExpenseForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenses(expenseData);
        setAddExpenseForm(false);
    }

    const showAddExpensesForm = () => {
      setAddExpenseForm(true);
    }

    const hideExpenseForm = () => {
        setAddExpenseForm(false);
    }

    return (
      <div className="new-expense">
        {!showAddexpenseForm && (
          <button type="button" onClick={showAddExpensesForm}>
            Add New Expense
          </button>
        )}
        {showAddexpenseForm && (
          <ExpenseForm
            onSaveExpensesData={saveExpenseDataHandler}
            onHideExpenseForm={hideExpenseForm}
          />
        )}
      </div>
    );
}

export default NewExpense;