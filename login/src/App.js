import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Authn from './Pages/Auth';
import Login from './Pages/Login';
import Profile from './Pages/Profile';



function App() {
  return (
      <Fragment>
        <Header/>
        <Route path='/authn'><Authn/></Route>
        <Route path='/login'><Login/></Route>

           
      </Fragment>

  );
}

export default App;
