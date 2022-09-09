import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Trigger from "./Trigger";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      date: new Date(enteredExpenseData.date),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const toggleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="new-expense">
      {!isOpen && <Trigger onClick={toggleIsOpen} />}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleIsOpen}
        />
      )}
    </div>
  );
};

export default NewExpense;
