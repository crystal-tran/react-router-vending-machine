import React from 'react';
import { Link } from "react-router-dom";

/** Render Link components for each snack
 *
 * Props:
 * - snacks: an array like ["chips",...]
 *
 * State: None
 *
 * App -> Vending Machine
 */

function VendingMachine({ snacks }) {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine!</h1>
      <h2>Snack options:</h2>
      <ul>
        {snacks.map(s => (
          <li key={s}>
            <Link to={`/snack/${s}`}>{s}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VendingMachine;
