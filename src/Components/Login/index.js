import { useState } from 'react';
// import {registerUser, loginUser} from '../../config/firebase';
import { Box } from '@mui/material';
import {registerUser, loginUser} from '../../config/firebase';
import { lightBlue } from '@mui/material/colors';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


  
function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                <TextField
                        onChange={e => setEmail(e.target.value)} 

                 label='Username' placeholder='Enter username' fullWidth required/>
                <TextField
                        onChange={e => setPassword(e.target.value)}

                label='Password' placeholder='Enter password' type='password' fullWidth required/>
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
                     <Link href="#" onClick={()=>loginUser({email,password})} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
      {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 258,
          height: 200,
        },
      }}
    >
      <Paper elevation={3} >
        <input
        onChange={e => setEmail(e.target.value)} 
         type = 'email' placeholder = 'Enter your email'></input>
         <br/><br/>
        <input
        onChange={e => setPassword(e.target.value)}
        type = 'password' placeholder = 'Enter your Password'></input>
        <br/><br/>
        <button onClick={()=>loginUser({email,password})}>login</button>

        </Paper> 
    </Box> */}
      


     
      </header>
    </div>
  );
}

export default Login;
