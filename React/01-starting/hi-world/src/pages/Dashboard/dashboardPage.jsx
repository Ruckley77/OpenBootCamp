import React from 'react';
import Button from '@mui/material/Button'
import Copyright from '../../components/pure/copyright';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  
  const navigate = useNavigate()
  const logout = () => {
    navigate('/login')
  }

  return (
    <div>
      <Button variant='contained' onClick={logout} > LogOut </Button>
      <Copyright/>
    </div>
  );
}

export default DashboardPage;
