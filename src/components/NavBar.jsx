import React from 'react'

const NavBar = ({handleClickShowModal}) => {    

  return (
    <nav className='navBar'>
        <h1>User Registration</h1>
        <button onClick={handleClickShowModal} className='btnNavBar'><i className='bx bx-cross'></i>Create New User</button>
    </nav>
  )
}

export default NavBar