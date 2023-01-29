import React, { memo } from 'react';

const ListItem = memo(({ item, onRemove }) => {
  console.log('render ListItem');
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.name)}>
        Remove
      </button>
    </li>
  );
});

export default ListItem;
