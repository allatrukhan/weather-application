import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";


import "./Registration.css";

function Registration(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {registration, error} = useSelector((state)=>state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegistration=(e)=>{
        e.preventDefault();
        let newUserCredentials={
            firstName, lastName, email, password
        }

        dispatch(registerUser(newUserCredentials)).then((result)=>{
            if(result.payload){
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                navigate('/')
            }
        })
    };

    return(
        <div className="registration">
        <div class="modal modal-sheet position-static d-block  p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
        <div class="modal-dialog" role="document"></div>
        <form className='modal-content rounded-4 p-3 py-md-5' onSubmit={handleRegistration}> 
            <label>First name</label>
            <input type="text" required className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            <br/>
            <label>Last name</label>
            <input type="text" required className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
            <br/>
            <label>Email</label>
            <input type="email" required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <br/>
            <label>Password</label>
            <input type="password" required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <br/>
            <button type="submit" className='btn btn-outline-secondary' >
                {registration?'Registration...':'Register'}
            </button>
            {error&&(
                <div className='alert alert-danger' role='alert'> {error}</div>
            )}
        </form>  
        </div>
        </div>
    )
}

export default Registration;   