import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <h2>
        <Link to={'Login'}>Login</Link>
      </h2>
      <h2>
        <Link to={'Register'}>Register</Link>
      </h2>
      <h2>
        <Link to={'Product'}>Product</Link>
      </h2>
      <h2>
        <Link to={'ProductDetail'}>Single Product</Link>
      </h2>
    </>
  )
}

export default Navbar
