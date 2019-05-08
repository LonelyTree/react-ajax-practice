import React from "react";

const CrimesList = props => {
  const crimesList = props.crimes.map((crime, i) => (
    <li key={i}>
      {crime.description}
      <button onClick={() => props.deleteItem(i)}>Delete</button>
    </li>
  ));
  return (
    <div>
      <h4>Crimes</h4>
      <ul>{crimesList}</ul>
    </div>
  );
};
export default CrimesList;
