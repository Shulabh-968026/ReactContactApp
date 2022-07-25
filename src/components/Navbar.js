import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../../src/logo.svg"

function Navbar(props) {

    const [search,setSearch] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.findContact(search)
    }

  return (
    <nav className='navbar navbar-expand-lg bg-dark'>
        <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
                <img src={logo} className="logo"/>
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contactform' className='nav-link'>Contact Form</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacttable' className='nav-link'>Contact Table</a>
                    </li>
                </ul>
               <form className='d-flex' onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="text" name='search' 
                        placeholder='search' onChange={(e)=>setSearch({search:e.target.value})}/>
                    <button className='btn btn-primary' type='submit'>Search</button>
               </form>
            </div>
        </div>
    </nav>
  )
}

export default Navbar