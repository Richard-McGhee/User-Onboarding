import React, { useState } from 'react';
import './App.css';
import Forms from './components/Forms'
// import * as yup from 'yup'

function App() {
  const [ users, setUsers ] = useState([])
  return (
    <div className='app-container'>
      <h1>PLACEHOLDER</h1>
      <Forms users={users} setUsers={setUsers} />
      {users.map(item => (
        <h3 key={item.id}>{item.username} - {item.email}</h3>
    ))}
    </div>
  );
}

export default App;
