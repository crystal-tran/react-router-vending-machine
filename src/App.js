import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Snack from './Snack';
import VendingMachine from './VendingMachine';


const DEFAULT_SNACKS = ["chips", "sardines", "coke"];

/** Renders Vending Machine app
 *
 * Props: snacks: an array like ["chips",...]
 *
 * State: None
 *
 * App -> { VendingMachine, Snack }
 */

function App({ snacks = DEFAULT_SNACKS }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/snack/:name" element={<Snack snacks={snacks}/>} />
          <Route path="/" element={<VendingMachine snacks={snacks}/>} />
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
