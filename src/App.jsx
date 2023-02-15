import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
//import UserCard from './components/UserCard'
import UserList from './components/UserList'


const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
    //esta funcion fue creada en el navbar, se pone aqui para que tenga doble funcionalidad apartir de aqui
  }

  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`,data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios
      .delete(`${BASE_URL}users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (data, id) => {
    axios
      .patch(`${BASE_URL}users/${id}/`, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className='App'>      
        <NavBar handleClickShowModal={handleClickShowModal} />
        <ModalForm 
            handleClickShowModal={handleClickShowModal} 
            isShowModal={isShowModal}
            createUser={createUser}
            updatingUser={updatingUser}
            updateUser={updateUser}
            setUpdatingUser={setUpdatingUser}
        />
        <UserList
          users={users} 
          deleteUser={deleteUser} 
          setUpdatingUser={setUpdatingUser}
          handleClickShowModal={handleClickShowModal}
        />

    </div>
  )
}

/* <section className='list'>          
{
  users.map(user => <UserCard key={user.id} 
    user={user} 
    deleteUser={deleteUser} 
    setUpdatingUser={setUpdatingUser}
    handleClickShowModal={handleClickShowModal}
  />)
}
</section> */

export default App
