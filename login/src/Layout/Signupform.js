import React,{useRef,useState,useContext} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import AuthorizationContext from "../Store/AuthorizationContext";
import {useHistory} from 'react-router-dom'


const SignupForm= ()=>{
  const history=useHistory();

  const ctx=useContext(AuthorizationContext)
  const [isLogin,setIsLogin]=useState(true)
  const [isLoading,setLoading]=useState(false)

  const inputEmail=useRef();
      const inputPassword=useRef();

  const onSwithAuthorizationModeHandler=()=>{
    setIsLogin((prevState)=>!prevState)
  }
  

  const onSubmitHandler=(event)=>{
    event.preventDefault();  
   
    const emailAddress=inputEmail.current.value;
    const password=inputPassword.current.value;
   
    let url;
    setLoading(true)
    if(isLogin){
      url=   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es';
    }else{
      url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es';
    }
    fetch(url,
        {method:'POST',
          body:JSON.stringify({
            email:emailAddress,
            password:password,
            returnSecureToken:true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        }
        ).then(res=>{
          setLoading(false)

             if(res.ok){
                return res.json()
          }
          else{
          return  res.json().then(data=>{
              //show error
          
              let errorMessage="Authentication failed"
              // if(data && data.error&& data.error.message){
              //   errorMessage=data.error.message;
              // }
              throw new Error(errorMessage);
            });
          }

        }).then((data)=>{
              console.log(data)//when successful request
              history.replace('/home')
              ctx.login(data.idToken)

        }).catch((error)=>{
          alert(error.message)

        })
     
    
  

  }

    return (
   <Container >
 <Form  class= "row g-3 mr-4 bg-color-blue" onSubmit={onSubmitHandler} >
          <h4> {isLogin ?'Login':'SignUp'}</h4>
          <Form.Group className="mb-2 ms-20 col-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  ref={inputEmail} />
           
          </Form.Group>
    
          <Form.Group className="mb-2 col-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={inputPassword} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
          </Form.Group>
       {!isLoading  && <Button variant="primary" type="submit"  >
           {isLogin? 'Login':'Signup'}       
          </Button>}
          {isLoading && <p>Sending request....</p>}
          <div>
          <Button variant="Link" onClick={onSwithAuthorizationModeHandler}>
            {isLogin?'Create New Account.':'Login with Existing Account'}
          </Button>
          </div>
     
     </Form>
   </Container>
       
     )
}
export default SignupForm;