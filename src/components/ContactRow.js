import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
function ContactRow(props) {
    const { email, name, phone} = props.contact.data;
    console.log(props.contact)
    const [show,setShow] = useState(false)
    const [showForm,setShowForm] = useState(false)
    const showHideModal = ()=>{
        setShow(!show)
    }
    const showHideFormModal = ()=>{
        setShowForm(!showForm)
    }
    const [inputs,setInputes] = useState(props.contact.data)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs)
        if(inputs.name === "" || inputs.email === "" || inputs.phone === ""){
            return
        }
        props.editContact(props.contact.id,inputs)
        setInputes({
            name:"",
            email:"",
            phone:""
        })
        showHideFormModal()
    }
  return (
    <tr>
        <td onClick={showHideModal}>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
            <i className="fa-solid fa-pen"  onClick={showHideFormModal} style={{color:"blue",marginRight:"10px"}}></i>
            <i className="fa-solid fa-trash" onClick={()=>props.deleteContact(props.contact.id)} style={{color:"red",marginLeft:"10px"}}></i>
        </td>
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>
                    Contact Data
                </Modal.Title>
                <button type="button" className="btn-close" onClick={showHideModal}></button>
            </Modal.Header>
            <Modal.Body>
                <p>Name: <b>{name}</b></p>
                <p>Email: <b>{email}</b></p>
                <p>Phone: <b>{phone}</b></p>
            </Modal.Body>
        </Modal>
        <Modal show={showForm}>
            <Modal.Header>
                <Modal.Title>
                    Edit Contact
                </Modal.Title>
                <button type="button" className="btn-close" onClick={showHideFormModal}></button>
            </Modal.Header>
            <Modal.Body>
            <form className='form-contact' style={{width:"470px"}} onSubmit={handleSubmit}>
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
                <button type="submit" className='btn-submit'>Edit</button>
            </form>
            </Modal.Body>
        </Modal>
    </tr>
  )
}

export default ContactRow