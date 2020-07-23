import React from 'react';
import './App.css';
// import Forms from './components/Forms'
import yup from 'yup'

function App() {
  let schema = yup.string()
  await schema.isValid('TEST')
  return (
    <div className="App">
      <h1>Placeholder</h1>
    </div>
  );
}

export default App;
