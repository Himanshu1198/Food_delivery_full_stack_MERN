import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  let navigate = useNavigate()
  const handleSumbmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '',
        password: credentials.password,
        email: credentials.email,
        location: '',
      }),
    })
    const json = await response.json() // maybe not be required
    if (response.success === false) {
      alert('Enter valid credentials')
    } else {
      localStorage.setItem('authToken', json.authToken)
      console.log(localStorage.getItem('authToken'))
      navigate('/')
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div
        className='container rounded'
        style={{
          width: '30rem',
          marginTop: '8rem',
          padding: '60px',
          border: '0.2px solid gray',
        }}
      >
        <form onSubmit={handleSumbmit}>
          <div className='mb-3'>
            <label
              htmlFor='exampleInputEmail1'
              className='form-label'
              style={{ fontWeight: 'bolder' }}
            >
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              name='email'
              value={credentials.email}
              onChange={onChange}
              style={{ boxShadow: '8px 5px 20px 0px gray' }}
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='exampleInputPassword1'
              className='form-label'
              style={{ fontWeight: 'bolder' }}
            >
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              name='password'
              value={credentials.password}
              onChange={onChange}
              style={{ boxShadow: '8px 5px 20px 0px gray' }}
            />
          </div>
          <button
            type='submit'
            className='btn btn-success'
            style={{ color: 'white', fontWeight: 'bolder' }}
          >
            Submit
          </button>
          <Link
            to='/createuser'
            className='m-3 btn btn-danger'
            style={{ color: 'white', fontWeight: 'bolder' }}
          >
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  )
}
