import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
const expenses = [
  { id : 'el', title : '화장지', amount :9400, date : new Date(1999, 7, 10) },
  { id : 'e2', title : '모니터', amount :33400, date : new Date(2023, 5, 14) },
  { id : 'e3', title : '쿠션', amount :5400, date : new Date(2019, 6, 6) },
  { id : 'e4', title : '아이라이너', amount :13400, date : new Date(2021, 12, 20) },
];

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  )};

export default App;
