import React, { memo } from 'react';
import ListItem from './ListItem';

const List = memo(({ list, onRemove }) => {
  console.log('render List');
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

export default List;
