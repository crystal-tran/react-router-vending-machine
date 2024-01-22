import React from "react";
import { Link } from "react-router-dom";

const defaultSnacks = ["chips", "sardines", "coke"];

/**  Render Link components for each snack
 *
 * Props:
 * - snacks: an array like ["chips",...]
 *
 * State:
 * - None
 *
*/
function Nav({ snacks = defaultSnacks }){
  return(
    <ul>
      {snacks.map(s => (
        <li key={s}>
          <Link to={`/snack/${s}`}>{s}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;