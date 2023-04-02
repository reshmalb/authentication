import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Authn from './Pages/Auth';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignupForm from './Layout/Signupform';



function App() {
  return (
      <Fragment>
        <Header/>
        <Route path='/auth'><Login/></Route>
        <Route path='/profile'><Profile/></Route>

           
      </Fragment>

  );
}

export default App;
