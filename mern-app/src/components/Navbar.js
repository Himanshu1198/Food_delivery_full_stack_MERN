import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'
export default function Navbar() {
  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-dark bg-light'
        style={{ boxShadow: '30px 30px 30px 30px white' }}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img
              src={logo}
              alt=''
              style={{ borderRadius: '30px', height: '40px', width: '40px' }}
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item  '>
                <Link className='nav-link active ' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
            </ul>
            {/* {localStorage.getItem('authToken') ? (
              <ul className='navbar-nav '>
                <li className='nav-item '>
                  <Link className='nav-link active ' aria-current='page' to='/'>
                    My Orders
                  </Link>
                </li>
              </ul>
            ) : (
              ''
            )} */}
            <div className='d-flex'>
              {!localStorage.getItem('authToken') ? (
                <div>
                  <Link
                    className='btn btn-primary text-success mx-1'
                    to='/login'
                  >
                    Login
                  </Link>

                  <Link
                    className='btn btn-primary text-success mx-1'
                    to='/createuser'
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div>
                  {/* <div className='btn btn-primary text-success mx-1'>
                    My Cart
                  </div> */}
                  <Link
                    className='btn btn-primary text-success mx-1'
                    to='/createuser'
                  >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
