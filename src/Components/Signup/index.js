import { useState } from 'react';
import {registerUser, loginUser} from '../../config/firebase';
import { Box } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')

    const [age, setAge] = useState('')
    const paperStyle={padding :20,height:'58vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

  return (
    <div className="App">
      <header className="App-header">
      <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>Signup()} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>




      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 250,
          backgroundColor: "lightbrown",
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
         <br/>
        <input
        onChange={e => setPassword(e.target.value)}
        type = 'password' placeholder = 'Enter your Password'></input>
        <br/>
        <button onClick={()=>registerUser({email,password,fullName,age})} >signUp</button>

        </Paper> 
    </Box>
      


     
      </header>
    </div>
  );
}

export default Signup;
