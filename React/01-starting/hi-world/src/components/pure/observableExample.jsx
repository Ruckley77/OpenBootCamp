import React, {useState} from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

  const [number, setNumber] = useState(0);

  const obtainNewNumbers = () => {

    console.log('Started Subscription to Observable')

    getNumbers
      .subscribe(
        {
          //.then()
          next(newNumber){
            console.log(`New Number: ${newNumber}`)
            setNumber(newNumber)
          },
          // .catch()
          error(error){
            alert(`Something went wrong: ${error}`)
            console.log('Error in Observable');
          },
          // .finally()
          complete(){
            console.log('Done with Observable')
            console.log(`Finished with: ${number}`)
          }
        }
        )
      }
      
  return (
    <div>
      <h2> Number: {number} </h2>
      <button onClick={obtainNewNumbers} >
        Obtain New Numbers
      </button>
    </div>
  );
}

export default ObservableExample;
