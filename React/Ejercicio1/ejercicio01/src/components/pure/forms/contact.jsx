import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';
import ConnectedComponent from './connected';


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
      <ConnectedComponent estado={true}></ConnectedComponent>
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
