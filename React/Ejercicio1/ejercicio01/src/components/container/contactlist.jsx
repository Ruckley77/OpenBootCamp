import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/forms/contact';


const ContactListComponent = () => {
  const defaultContact = new Contact("Juan", "Marulanda", "marulo77@hotmail.com", false)

  return (
    <div>
      <h1> Tu Perfil: </h1>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
