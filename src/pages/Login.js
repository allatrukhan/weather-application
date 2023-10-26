import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {loading, error} = useSelector((state)=>state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent=(e)=>{
        e.preventDefault();
        let userCredentials={
            email, password
        }
        dispatch(loginUser(userCredentials)).then((result)=>{
            if(result.payload){
                setEmail('');
                setPassword('');
                navigate('/')
            }
        })
    };

    return(
        <div className="login">
            <div class="modal modal-sheet position-static d-block  p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document"></div>
                <form className='modal-content rounded-4 p-3 py-md-5' onSubmit={handleLoginEvent}> 
                    <label>Email</label>
                        <input type="email" required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <br/>
                    <label>Password</label>
                        <input type="password" required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        <br/> 
                    <button type="submit" className='btn btn-outline-secondary'>
                        {loading?'Loading...':'Login'}
                    </button>
                        {error&&(
                        <div className='alert alert-danger' role='alert'> {error}</div>
                    )}
                </form>  
            </div>
        </div>
    )
}

export default Login;   
