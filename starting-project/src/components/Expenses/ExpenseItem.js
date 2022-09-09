import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <li>
      <Card className="expense-item">
        <div>
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
