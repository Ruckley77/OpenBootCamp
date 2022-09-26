import React, {useState, useEffect} from 'react';

const Clock = () => {

  const personaInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: "Juan",
    apellido: "Marulanda"
  }

  const [persona, setPersona] = useState(personaInicial);

  function updatePersona(){
    setPersona({
      nombre: persona.nombre,
      apellido: persona.apellido,
      fecha: new Date(),
      edad: persona.edad + 1,
    })
  }

  useEffect(() => {
    // didmount
    const intervaloID = setInterval(() => {
      updatePersona()
    }, 1000)
    // will unmount
    return () => {
      clearInterval(intervaloID)
    }
  },)

  return (
    <div>
      <h2>
        Hora Actual:
        <br/>
        {persona.fecha.toLocaleDateString()}
      </h2>
      <h3> {persona.nombre} {persona.apellido} </h3>
      <h1> {persona.edad} </h1>
    </div>
  );
}

export default Clock;
