import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Signin.scss'
import { useDispatch } from 'react-redux';
import { loginFail, loginStart, loginSucess } from '../../Redux/userSlice';

function Signin() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('')
    const API = import.meta.env.VITE_API
    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    const handlelogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const res = await axios.post(`${API}/user/signin`,{name,password},{withCredentials:true})
            dispatch(loginSucess(res.data))
            navigate('/')
        } catch (error) {
            console.log(error)
            dispatch(loginFail())
        }
    }

  return (
    <div className='signin-container'>
        <div className="wrapper">
            <h1 className='title'>Sign IN</h1>
            <input placeholder='name' name='name' onChange={ e => setName(e.target.value)} />
            <input placeholder='password' type='password' name='password' onChange={ e => setPassword(e.target.value)} />
            <button onClick={handlelogin} >Sign In</button>
            <p className='bottom'>Don't have an account? <Link className='link'>register!</Link></p>
        </div>
    </div>
  )
}

export default Signin