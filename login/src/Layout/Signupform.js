import React,{useRef,useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'


const SignupForm= ()=>{
  const [isLogin,setIsLogin]=useState(true)

  const inputEmail=useRef();
    const inputPassword=useRef();

  const onSwithAuthorizationModeHandler=()=>{
    setIsLogin((prevState)=>!prevState)
  }
  const requestHandler=()=>{
    
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
  
    setIsLoading(true)
    const emailAddress=inputEmail.current.value;
    const password=inputPassword.current.value;
    const userDetails={
      email:emailAddress,
      password:password,
     
    }
    if(isLogin){
    

    }else{
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es',
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
          if(res.ok){
            //...
          }else{
          return(  res.json().then(data=>{
              //show error
              console.log("error",data)
              let errorMessage="Authentication failed"
              if(data && data.error&& data.error.message){
                errorMessage=data.error.message;
              }
              alert(errorMessage)
            }))
          }

        })
     
    }
  

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
          <Button variant="primary" type="submit" onClick={requestHandler} >
           {isLogin? 'Login':'Signup'}
        
          </Button>
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