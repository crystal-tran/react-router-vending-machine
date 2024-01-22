import './App.css';
import VendingMachine from './VendingMachine';

/** Renders Vending Machine app
 *
 * Props: None
 *
 * State: None
 *
 * App -> Vending Machine -> {Nav, Snack}
 */

function App() {
  return (
    <div className="App">
     <VendingMachine />
    </div>
  );
}

export default App;
