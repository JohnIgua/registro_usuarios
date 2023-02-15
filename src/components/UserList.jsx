import React from 'react'
import UserCard from './UserCard'

const UserList = ({users, deleteUser, setUpdatingUser, handleClickShowModal, isShowModal}) => {
  return (
    <section className='list'>
          {
            users.map(user => <UserCard key={user.id} 
              user={user} 
              deleteUser={deleteUser} 
              setUpdatingUser={setUpdatingUser}
              handleClickShowModal={handleClickShowModal}
            />)
          }
    </section>
  )
}

export default UserList