import React, { useState } from 'react'
import './ContactForm.css'

function ContactForm(props) {
    const [inputs,setInputes] = useState({
        name:"",
        email:"",
        phone:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs)
        if(inputs.name === "" || inputs.email === "" || inputs.phone === ""){
            return
        }
        props.addContact(inputs)
        setInputes({
            name:"",
            email:"",
            phone:""
        })
    }
  return (
    <>
        <h1 className='text-center mt-4' id='contactform'></h1>
        <form className='form-contact' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type={"text"} name="name" placeholder='Enter your Good Name...'
                    value={inputs.name} className="form-controls"
                    onChange={(e)=>setInputes({...inputs,name:e.target.value})}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type={"email"} name="email" placeholder='Enter your Email...'
                    value={inputs.email} className="form-controls"
                    onChange={(e)=>setInputes({...inputs,email:e.target.value})}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='phone'>Phone:</label>
                <input type={"number"} name="phone" placeholder='Enter your Phone Number...'
                    value={inputs.phone} className="form-controls"
                    onChange={(e)=>setInputes({...inputs,phone:e.target.value})}
                />
            </div>
            <button type="submit" className='btn-submit'>Submit</button>
        </form>
    </>
  )
}

export default ContactForm