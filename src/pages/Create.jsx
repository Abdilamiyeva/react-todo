import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Create() {
  const [values, setValues] = useState({
    name:'',
    email:'',
    phone:''
  })
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/users', values)
    .then(res => navigate('/')
      )
    .catch( (err => console.log(err)) )
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded ">
        <h2> Add a User</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input onChange={e => setValues( {...values, name: e.target.value})} type="text" name='name' className='form-control' placeholder='Enter Name' />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input onChange={e => setValues( {...values, email: e.target.value})}  type="email" name='email' className='form-control'  placeholder='Enter Email'/>
          </div>
          <div className="mb-3">
            <label htmlFor="number">Phone:</label>
            <input onChange={e => setValues( {...values, phone: e.target.value})} type="number" name='number' className='form-control'  placeholder='Enter Phone'/>
          </div>
          <button className='btn btn-success'>Submit</button>
          <NavLink to="/" className="btn btn-primary ms-3">Back</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Create