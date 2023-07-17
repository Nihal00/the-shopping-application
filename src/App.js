import './App.css';
import Balance from './components/Balance';
import Budget from './components/Budgets';

function App() {
  return (
    <div className="App">
     <h1>Company's Budget Allocation</h1>
     <div className="tabs">
       <Budget />
       <Balance />
     </div>
    </div>
  );
}

export default App;
