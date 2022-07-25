import React from 'react'
import ContactRow from './ContactRow'

function ContactTable(props) {

    console.log(props)
    const { contacts, deleteContact, editContact} =  props
    const contact = contacts.map((contact)=><ContactRow contact={contact} deleteContact={deleteContact} key={contact.id} editContact={editContact}/>)
    return (
    <div className='table-responsive mx-3' id='contacttable'>
        <h3 className='text-center mt-4'></h3>
        <table className='table table-dark table-hover table-striped text-center mt-4'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    contact
                }
            </tbody>
        </table>
    </div>
  )
}

export default ContactTable