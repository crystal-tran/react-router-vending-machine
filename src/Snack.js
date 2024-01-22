import React from 'react';
import { useParams, Link, Navigate } from "react-router-dom";


/** Renders Snack component based on url params
 *
 * Props: snacks: an array like ["chips",...]
 *
 * State: None
 *
 * App -> Snack
 */

function Snack({ snacks }){
  const { name } = useParams();

  if (!(snacks.includes(name))) {
    return (<Navigate to="/" />);
  }

  return(
    <div className="Snack">
      <h1>Selected snack: { name }</h1>
      <Link to={"/"}>Back to vending machine</Link>
    </div>
  )

}

export default Snack;