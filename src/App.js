import React from 'react'

const App = () => {
  return (
    <>
      <h1>Online cloud deployment on netlify of Library Subscription System</h1>
      <form>
        <div>
          <label>
            Enter Id
          </label>
          <input type='number' />
        </div>
        <div>
          <label>
            Enter Full name
          </label>
          <input type='text' />
        </div>
        <div>
          <label>
            Enter Email
          </label>
          <input type='email' />
        </div>
        <div>
          <label>
            Enter Password
          </label>
          <input type='password' />
        </div>
        <div>
          <label>
            Enter Months For
          </label>
          <input type='number' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}

export default App