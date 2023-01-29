import React, { useCallback } from 'react';
import List from './components/List';

const App = () => {
  const [users, setUsers] = React.useState([
    { name: 'Mike ' },
    { name: 'Sam' },
  ]);

  const [text, setText] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ name: text }));
  };

  const handleRemove = useCallback(
    (name) => {
      setUsers(users.filter((user) => user.name !== name));
    },
    [users]
  );

  console.log('render App');

  return (
    <div className="wrapper">
      <main>
        <input type="text" value={text} onChange={handleText} />
        <button className="add" type="button" onClick={handleAddUser}>
          Add User
        </button>
      </main>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

export default App;
