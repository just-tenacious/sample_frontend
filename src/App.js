import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [lid, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [month, setMonth] = useState(0);
  const [data, setData] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log("Button clicked");
    console.log(name);
    setName('');
  }

  return (
    <div className='card p-2 m-4'>
      <h1 className='h-2 p-3 text-align-center'>Online cloud deployment on netlify of Library Subscription System</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="id">
            Enter Id
          </label>
          <input type='number' name='id' value={lid} onChange={(e) => setId(e.target.value())} min={1} max={99} required />
        </div>
        <br />
        <div>
          <label htmlFor="fname">
            Enter Full name
          </label>
          <input type='text' name='fname' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <br />
        <div>
          <label htmlFor={email}>
            Enter Email
          </label>
          <input type='email' name='email' />
        </div>
        <br />
        <div>
          <label htmlFor={password}>
            Enter Password
          </label>
          <input type='password' name='password' />
        </div>
        <br />
        <div>
          <label htmlFor={month}>
            Enter Months For
          </label >
          <input type='number' name='month' />
        </div >
        <br />
        <div>
          <button className='btn btn-primary m-2 px-5'>Submit</button>
        </div>
      </form >
    </div >
  )
}

export default App