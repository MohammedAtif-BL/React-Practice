import React from 'react';

function NameList() {
  const names = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h3>List of Names</h3>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
