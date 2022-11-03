import React from 'react';

function CheckListItem({ checklist }) {
  const [category] = checklist;
  const { item_name, status } = category;
  return (
    <div>
      <h3>{category}</h3>
      <div>
        <span>{item_name}</span>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default CheckListItem;
