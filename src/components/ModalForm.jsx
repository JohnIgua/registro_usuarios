import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/ModalForm.css"

const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
}

const ModalForm = ({isShowModal, handleClickShowModal, createUser, updatingUser, updateUser, setUpdatingUser}) => {

    const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        if (updatingUser) {
            updateUser(data, updatingUser.id)
        } else {
            createUser(data);            
        }
        //console.log(data)
        reset(defaultValues);
    };

    const handleClickClose = () => {
        handleClickShowModal()
        reset(defaultValues)
        setUpdatingUser()
    }

    useEffect(() => {
      if (updatingUser) {
        reset(updatingUser)
      }
    }, [updatingUser])    

  return (
    <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
        <form onSubmit={handleSubmit(submit)} className='modalForm_form'>
            <h3 className='modalForm_title'>{updatingUser ? "Edit User" : "New User"}</h3>
            <div className='modalForm_div'>
                <label className='modalForm_label' htmlFor=''>First Name</label>
                <input className='modalForm_input' type="text" {...register("first_name")} />
            </div>
            <div className='modalForm_div'>
                <label className='modalForm_label' htmlFor=''>Last Name</label>
                <input className='modalForm_input' type="text" {...register("last_name")} />
            </div>
            <div className='modalForm_div'>
                <label className='modalForm_label' htmlFor=''>Email</label>
                <input className='modalForm_input' type="text" {...register("email")} />
            </div>
            <div className='modalForm_div'>
                <label className='modalForm_label' htmlFor=''>Password</label>
                <input className='modalForm_input' type="password" {...register("password")} />
            </div>
            <div className='modalForm_div'>
                <label className='modalForm_label' htmlFor=''>Birthday</label>
                <input className='modalForm_input' type="date" {...register("birthday")} />
            </div>
            <i onClick={handleClickClose} className='modalForm_x bx bx-x'></i>
            <button className='modalForm_button'>{updatingUser ? "Edit User" : "Add new user"}</button>            
        </form>
    </section>
  )
}
//En el boton x inicialemente estaba handleClickShowModal despues se reemmplazo por una funcion para que la x hiciera mas cosas
export default ModalForm