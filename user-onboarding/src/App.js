import React, { useState } from 'react';
import './App.css';
import Forms from './components/Forms'
import * as yup from 'yup'

function App() {
  const [ users, setUsers ] = useState([])
  return (
    <div className='app-container'>
      <h1>PLACEHOLDER</h1>
      <Forms users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
