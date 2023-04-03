import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import { Fragment, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import AuthorizationContext from './Store/AuthorizationContext';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignupForm from './Layout/Signupform';
import Home from './Pages/Home';
import Auth from './Pages/Auth';



function App() {
const ctx=useContext(AuthorizationContext)

  return (
      <Fragment>
        <Header/>
        <switch>
        <Route path='/' exact >
          <Redirect to='/auth'> </Redirect>
        </Route>
        <Route to='/auth'><Auth></Auth></Route>
      {!ctx.isLoggedin && <Route path='/login' ><Login/></Route>}
       {ctx.isLoggedin &&  <Route path='/home'><Home/></Route>}
       {ctx.isLoggedin && <Route path='/profile'><Profile/></Route>}

       <Route path='*'>
        <Redirect to='/'><Auth/></Redirect>
       </Route>
        </switch>
       

           
      </Fragment>

  );
}

export default App;
