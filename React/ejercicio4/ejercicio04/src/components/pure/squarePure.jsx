import React, {useState} from 'react';




const SquarePure = () => {

  const [manageInterval, setManageInterval] = useState(0);
  const [squarecolor, setSquarecolor] = useState("black");


  const changeColor = () => {
    let red = Math.random() * 256
    let green = Math.random() * 256
    let blue = Math.random() * 256
    setSquarecolor(`rgb(${red}, ${green}, ${blue})`)
  }

  const changeColorBack = () => {
    setSquarecolor("black")
  }

  const onChangeColor = () => {
    return setManageInterval(setInterval(() => {
      changeColor()
    }, 500))
  }

  const onStopChangeColor = () => {
    return clearInterval(manageInterval)
  }

  return (
    <div style={{width:"255px", height:"255px", backgroundColor: squarecolor}}
    onMouseEnter={onChangeColor} onMouseLeave={onStopChangeColor}  onDoubleClick={onStopChangeColor} >
    </div>
  );
}

export default SquarePure;
