import Signup from './Components/Signup/index'
import Login from './Components/Login/index'
import  PostAd from './Components/Dashboard/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import { Button } from '@mui/material';

function App(){
  return (
    <div className="App">
      <header className="App-header">
      

      <Router>
        
      <div>
        <nav>
        
            <Button>            
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button>
              <Link to="/about">Login</Link>
              </Button>
              <Button>
              <Link to="/users">Signup</Link>
              </Button>
        
        </nav>
        <Router/>
        <Switch>
          <Route exact path="/about">
            <Login />
          </Route>
          <Route exact path="/Users">
            <Signup />
          </Route>
          <Route exact path="/dashboard">
            <PostAd />
          </Route>
          
        </Switch>
        </div>
        
        </Router>
    </header>
    </div>
  );
}

export default App;
