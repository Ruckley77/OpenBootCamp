import React, { useState } from 'react';
import PropTypes from 'prop-types';

// using estado as parameter because thats the name of the property that i want to export
const ConnectedComponent = (estado) => {

  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h6>
        {conectado === false ? "Contacto No Disponible" : "Contacto En Linea"}
      </h6>
      <button onClick={() => setConectado (!conectado)}>{conectado === false ? "Conectar" : "Desconectar"} </button>
    </div>
  );
};


ConnectedComponent.propTypes = {
  estado: PropTypes.bool,
};


export default ConnectedComponent;
