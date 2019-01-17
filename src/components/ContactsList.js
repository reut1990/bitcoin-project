import React from 'react'
import ContactPreview from '../components/ContactPreview'

const ContactsList=({contacts})=>{
    const contactsList=contacts ? (
       contacts.map(contact=>{
        return(
              <ContactPreview contact={contact} key={contact._id}/>
           )
       })
   ) :(
       <p> No Contacts To show</p>
   )

   return(
       <ul className="contacts-list">
         { contactsList}         
       </ul>
   )
}

export default ContactsList


