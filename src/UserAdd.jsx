import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({

    name: "",
    username: "",
    email: ""
  })

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {

    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`https://corsproxy.io/?https://usercrudapi.foodyfly.buzz/api/users`, user);
    navigate("/")
  }

  return (
    <div className='countainer'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Add a User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input type="text" className='form-control form-control-lg' placeholder='Entre your Name' name='name' value={name} onChange={e => onInputChange(e)} />

          </div>
          <div className='form-group'>
            <input type="text" className='form-control form-control-lg' placeholder='Entre User Name' name='username' value={username} onChange={e => onInputChange(e)} />

          </div>
          <div className='form-group'>
            <input type="text" className='form-control form-control-lg' placeholder='Entre your Email' name='email' value={email} onChange={e => onInputChange(e)} />
          </div>
          <div className='form-group'>
            <input type="text" className='form-control form-control-lg' placeholder='Entre your phone' name='phone' value={phone} onChange={e => onInputChange(e)} />
          </div>
          <div className='form-group'>
            <input type="text" className='form-control form-control-lg' placeholder='Entre your website' name='website' value={website} onChange={e => onInputChange(e)} />
          </div>




          <button className=' text center btn btn-primary btn-block'>Add User</button>
        </form>

      </div>

    </div>
  )
}

export default UserAdd