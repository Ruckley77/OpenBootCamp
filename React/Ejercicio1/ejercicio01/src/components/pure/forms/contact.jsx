import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactComponent = ({contact}) => {

  return (
    <div>
      <h3>
      Nombre: {contact.nombre} 
      </h3>
      <h3>
      Apellido: {contact.apellido}
      </h3>
      <h4>
      Email: {contact.email}
      </h4>
      <h6>
      Estado: {contact.conectado ? "Contacto en Linea" : "Contacto No Disponible"}
      </h6>
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
