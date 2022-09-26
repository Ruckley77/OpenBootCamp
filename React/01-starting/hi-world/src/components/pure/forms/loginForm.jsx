/*
  Component that will contain a form to auth user
*/

import React, {useState} from 'react';

const LoginForm = () => {

  const initialCredentials = [
    {
      user: "",
      password: ""
    }
  ]

  const [credentials, setCredentials] = useState(initialCredentials);

  

  return (
    <div>
      
    </div>
  );
}

export default LoginForm;
