import React, {useEffect} from 'react';

const AllCycles = () => {

  useEffect(() => {
    console.log("All Cycles: Component has been created");

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`
      console.log("updated component")
    }, 1000);

    return () => {
      console.log("All Cycles: Component will dissapear")
      document.title = "Time has stopped"
      clearInterval(intervalID)
    };
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default AllCycles;
