import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(1945, 3, 30);
  const expenseTitle = "Messerschmitt-262A";
  const expensePrice = 420.69;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
