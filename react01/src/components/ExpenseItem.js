import { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

function ExpenseItem (props){
    console.log(useState());
    let [title, setTitle] = useState(props.title);
    // let [변수명, set변신함수명] = useState(초기값);
    console.log(title)
    const click = () => {
        setTitle('👄');
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}원</div>
            </div>
            <button onClick={click}>클릭</button>
        </Card>
    )
}

export default ExpenseItem;