import React, {useEffect, useState} from 'react';



const Customhook = (lista2) => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    if( lista2 !== null)
    setLista(lista2)
  }, []);

  return {
      lista: lista
    }
  
}




export default Customhook;
