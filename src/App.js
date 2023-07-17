import './App.css';
import Balance from './components/Balance';
import Budget from './components/Budgets';

const Bal = [
  {
    title: "Remaining",
    Amt: "1020"
  },
  {
    title: "Spent so far",
    Amt: "1020"
  }
]

function App() {
  return (
    <div className="App">
     <h1>Company's Budget Allocation</h1>
     <div className="tabs">
       <Budget />
       {Bal.map((bala) => <Balance {bala.title} />)}
     </div>
    </div>
  );
}

export default App;
