import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import './Header.css';

function getUser(){
    let user = localStorage.getItem('user');
    if(user){
        user = JSON.parse(user);
    }
    else{
        user = null;
    }
    return user;
}

function Header(){

    // const [user, setUser] = useState("");
    const [user, setUser] = useState(getUser());
    const handleLogout=()=>{
        localStorage.removeItem('user');
        setUser(null);
    };

    return(
        <>
        <nav class="py-2 bg-body-tertiary border-bottom">
            <div class="container d-flex flex-wrap">
                <ul class="nav me-auto">
                    <span class="fs-4">WEATHER FORECAST APP</span>
                </ul>
                {(user)?(
                    <>
                        <button className='nav-link link-body-emphasis px-2' onClick={handleLogout}>Logout</button>
                    </>
                ):(
                    <>  
                        <ul class="nav">
                            <Link to="/login" className='nav-link link-body-emphasis px-2'>Login</Link>  
                            <Link to="/registration" className='nav-link link-body-emphasis px-2'>Registration</Link> 
                        </ul> 
                    </>
                )}
            </div>
        </nav>
        {/* <header class="py-3 mb-4 border-bottom bg-body-tertiary">
            <div class="container d-flex flex-wrap justify-content-center">
                    <span class="fs-4">Hello, {user.firstName} {user.lastName}</span>
                <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
                </form>
            </div>
        </header> */}
    </>    
    )
}

export default Header;   