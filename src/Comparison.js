import React from 'react';
import './Comparison.css';

const Comparison = ({ pros, cons }) => {
  return (
    <div className="comparison">
      <div>
        <h3>PROS</h3>
        <ul>
          {pros.map(pro => <li key={pro.replace(' ', '-')}>{pro}</li>)}
        </ul>
      </div>
      <div>
        <h3>CONS</h3>
        <ul>
          {cons.map(con => <li key={con.replace(' ', '-')}>{con}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Comparison;
