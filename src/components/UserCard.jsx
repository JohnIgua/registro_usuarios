import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal, isShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className={`userCard ${isShowModal ? "closeList" : ""}`} key={user.id}>
                <h3>{user.first_name} {user.last_name}</h3>
                <hr />
                <ul>
                  <li><span>Email: </span> {user.email}</li>
                  <li><span>Birthday: </span> <i className='bx bx-gift'></i>{user.birthday}</li>
                </ul>
                <hr />
                <footer>
                  <button onClick={() => deleteUser(user.id)} className='delete'><i className='bx bx-trash'></i></button>
                  <button onClick={handleClickEdit} className='edit'><i className='bx bx-pencil'></i></button>
                </footer>
    </article>
  )
}

export default UserCard