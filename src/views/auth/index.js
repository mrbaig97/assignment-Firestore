import { useState } from 'react';
import {registerUser, loginUser} from '../../config/firebase';
import { Box,Paper } from '@mui/material';



function Auth(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')

    const [age, setAge] = useState('')

  return (
    <div className="App">
      <header className="App-header">
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 488,
          height: 420,
        },
      }}
    >
      <Paper elevation={3} >

      <input
        onChange={e => setFullName(e.target.value)} 
         type = 'text' placeholder = 'Enter your FullName'></input>
         <br/>
         <input
        onChange={e => setAge(e.target.value)} 
         type = 'numper' placeholder = 'Enter your Age'></input>
         <br/>
        <input
        onChange={e => setEmail(e.target.value)} 
         type = 'email' placeholder = 'Enter your email'></input>
         <br/><br/>
        <input
        onChange={e => setPassword(e.target.value)}
        type = 'password' placeholder = 'Enter your Password'></input>
        <br/><br/>
        <button onClick={()=>registerUser({email,password,fullName,age})} >signUp</button>
        <button onClick={()=>loginUser({email,password})}>login</button>

        </Paper> 
    </Box>
      


     
      </header>
    </div>
  );
}

export default Auth;
