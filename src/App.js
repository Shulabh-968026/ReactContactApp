import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { v4 } from "uuid";
import ContactTable from "./components/ContactTable";
function App() {

  const CONTACT_APP = "contact_app"
  const [contacts,setContacts] = useState([])
  const [filterContact,setFilterContact] = useState([])

  const addContact = (contact)=>{
    console.log(contact)
    setContacts([...contacts,{
      id:v4(),
      data:contact
    }])
  }

  const findContact=(val)=>{
    let value = val.search
    let retriveContact;
    if(value.endsWith("@gmail.com")){
        retriveContact = contacts.filter((contact)=>{
          return contact.data.email == value
      })
    }
    else if(!isNaN(value)){
      retriveContact = contacts.filter((contact)=>{
        return contact.data.phone == value
      })
    }
    else{
      retriveContact = contacts.filter((contact)=>{
        return contact.data.name == value
      })
    }
    console.log(retriveContact)
    setFilterContact(retriveContact)
  }
  const deleteContact =(id)=>{
    const retriveContact = contacts.filter((contact)=>{
      return contact.id !== id
    })
    if(retriveContact)setContacts(retriveContact)
  }

  
  useEffect(()=>{
    let retriveContact = JSON.parse(localStorage.getItem(CONTACT_APP));
    if(retriveContact) setContacts(retriveContact);
  },[])

  const editContact = (id,con)=>{
    console.log(id,con)
    /*deleteContact(id)
    addContact(con)*/
    let index;
    let count = 0
    contacts.forEach(element => {
      if(element.id === id){
        index = count
      }
      count++;
    });
    contacts[index].data = con
    localStorage.setItem(CONTACT_APP,JSON.stringify(contacts))
  }
  
  useEffect(()=>{
    if(contacts?.length>0){
      localStorage.setItem(CONTACT_APP,JSON.stringify(contacts))
    }
  },[contacts])

  
  return (
    <>
    <Navbar findContact={findContact}/>
    <Header/>
    <ContactForm addContact={addContact}/>
    <ContactTable contacts = {filterContact.length>0 ? filterContact : contacts} deleteContact={deleteContact} editContact={editContact}/>
    </>
  );
}

export default App;
