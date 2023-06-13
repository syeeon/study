import "./ExpenseDate.css" 

const ExpenseDate = (props) => {
    // console.log(props)

    const year = props.date.getFullYear();
    const month = props.date.getMonth().toString().padStart(2,'0');
    const day = props.date.getDate().toString().padStart(2,'0');
    // console.log(typeof day)
    return(
        <div className="expense-date">
            <div className="expense-date__year">{month == 0 ? year-1 : year}년</div>
            <div className="expense-date__month">{month == 0 ? "12": month }월</div>
            <div className="expense-date__day">{day}일</div>
        </div>
    )
};
export default ExpenseDate;
