import { log } from "console";
import React,{useState} from "react";  


const AuthorizationContext=React.createContext({
    token:'',
    userDetails:{},
    isLoggedin:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthorizationProvider=(props)=>{
   const initial_state=localStorage.getItem('token')
   const [istoken,setToken]=useState(initial_state)
   const [userDetails,setUserdetails]=useState({})
    
   const autoLogoutHandler=(timer)=>{
      const interval= setTimeout(() => {
        alert("Please Login .")
        logoutHandler();
        
     }, timer);
     return(()=>{
        clearTimeout(interval)
     })
    }
    if(initial_state){
      autoLogoutHandler(5000)
    }   
    const userIsLoggedin = !!istoken;//return true if token is string
                                  // and not empty

     const loginHandler=(token,user)=>{
      
        setToken(token)
        setUserdetails(user)

        console.log("user in atx",userDetails);
        localStorage.setItem('token',token)
         autoLogoutHandler(5000)
     }     
     const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
     }    
  
     
     const context={
        token:istoken,
        userDetails:userDetails,
        isLoggedin:userIsLoggedin,
        login:loginHandler,
        logout:logoutHandler
     }



  return(
    <AuthorizationContext.Provider value={context}>
    {props.children}
    </AuthorizationContext.Provider>

  ) 
}

export default AuthorizationContext;