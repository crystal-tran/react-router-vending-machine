import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from './Nav';


/** Displays snack links
 *
 * Props: None
 *
 * State: None
 *
 * Vending Machine -> {Nav, Snack}
 */

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/snack/:name" element={<Snack />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default VendingMachine;