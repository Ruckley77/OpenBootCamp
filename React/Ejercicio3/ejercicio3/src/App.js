import React, { useState } from 'react';
import ContactComponent from './components/contactComponent';
import ContactForm from './components/contactForm';
import './App.css';
const App = () => {
  const defaultContact = [
    { nombre: 'Jose', email: 'marulo77@hotmail.com ', conectado: true },
    { nombre: 'Maria', email: 'Gómez', conectado: true },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    setNuevoContacto([...nuevoContacto]);

    nuevoContacto[index].conectado = !nuevoContacto[index].conectado;
  }

  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    nuevoContacto.splice(index, 1);
    setNuevoContacto([...nuevoContacto])
  }

  function addContact(contacto) {
    setNuevoContacto([...nuevoContacto, contacto]);
  }

  return (
    <div className="App">
      <h1>Contactos</h1>

      <div className="card-container">
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactComponent key={index} contacto={contacto} changeState={changeState} remove={remove} />
          );
        })}
      </div>

      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
};

export default App;