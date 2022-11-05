import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const MustBeLogged = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    alert("Must be logged, redirecting to login page  ...")
    navigate("/login")
  },);

  return true

}

export default MustBeLogged;
