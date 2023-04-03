import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignupForm from './Layout/Signupform';
import Home from './Pages/Home';
import Auth from './Pages/Auth';



function App() {
  return (
      <Fragment>
        <Header/>
        <switch>
        <Route path='/' exact >
          <Redirect to='/auth'> </Redirect>
        </Route>
        <Route to='/auth'><Auth></Auth></Route>
        <Route path='/login' ><Login/></Route>
        <Route path='/home'><Home/></Route>


        <Route path='/profile'><Profile/></Route>
        </switch>
       

           
      </Fragment>

  );
}

export default App;
