import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  })

  let navigate = useNavigate()
  const handleSumbmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        password: credentials.password,
        email: credentials.email,
        location: credentials.geolocation,
      }),
    })
    const json = await response.json()

    if (!json.success) {
      alert('Enter valid credentials')
    } else {
      localStorage.setItem('authToken', json.authToken)
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
          marginTop: '2.5rem',
          padding: '60px',
          border: '0.2px solid gray',
        }}
      >
        <form onSubmit={handleSumbmit}>
          <div className='mb-3'>
            <label
              htmlFor='name'
              className='form-label'
              style={{ fontWeight: 'bolder' }}
            >
              Name
            </label>
            <input
              type='text'
              className='form-control'
              name='name'
              value={credentials.name}
              onChange={onChange}
              style={{ boxShadow: '8px 5px 20px 0px gray' }}
            />
          </div>
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
          <div className='mb-3 my-2'>
            <label
              htmlFor='name'
              className='form-label'
              style={{ fontWeight: 'bolder' }}
            >
              Address
            </label>
            <input
              type='text'
              className='form-control'
              name='geolocation'
              value={credentials.geolocation}
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
            to='/login'
            className='m-3 btn btn-danger'
            style={{ color: 'white', fontWeight: 'bolder' }}
          >
            Already a user
          </Link>
        </form>
      </div>
    </>
  )
}
