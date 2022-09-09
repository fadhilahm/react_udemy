import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [date, setDate] = useState("2022");

  const changeHandler = (date) => {
    setDate(date);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(date);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter date={date} onChange={changeHandler} />
      {true && <ExpensesList expenses={filteredExpenses} />}
    </Card>
  );
};

export default Expenses;
